(function() {
    'use strict';

    const repoCache = new Map();
    const STAT_FIELDS = {
        stars: 'stargazers_count',
        forks: 'forks_count',
        issues: 'open_issues_count',
        watchers: 'subscribers_count'
    };

    function normalizeRepo(repo) {
        return (repo || '').trim().replace(/^https:\/\/github\.com\//, '').replace(/\/$/, '');
    }

    function repoApiUrl(repo) {
        const [owner, name] = normalizeRepo(repo).split('/');
        if (!owner || !name) {
            throw new Error(`Invalid GitHub repo: ${repo}`);
        }

        return `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`;
    }

    function fetchRepo(repo) {
        const normalizedRepo = normalizeRepo(repo);
        if (!repoCache.has(normalizedRepo)) {
            repoCache.set(normalizedRepo, fetch(repoApiUrl(normalizedRepo), {
                headers: { Accept: 'application/vnd.github+json' }
            }).then(response => {
                if (!response.ok) {
                    throw new Error(`GitHub API returned ${response.status}`);
                }

                return response.json();
            }));
        }

        return repoCache.get(normalizedRepo);
    }

    function formatNumber(value, format) {
        if (typeof value !== 'number') return '';

        if (format === 'compact') {
            return new Intl.NumberFormat('en', {
                notation: 'compact',
                maximumFractionDigits: 1
            }).format(value);
        }

        return String(value);
    }

    function templateValues(repo, data, format) {
        const normalizedRepo = normalizeRepo(repo);
        return {
            repo: normalizedRepo,
            repoName: normalizedRepo.split('/')[1] || normalizedRepo,
            stars: formatNumber(data.stargazers_count, format),
            starsCompact: formatNumber(data.stargazers_count, 'compact'),
            forks: formatNumber(data.forks_count, format),
            forksCompact: formatNumber(data.forks_count, 'compact'),
            issues: formatNumber(data.open_issues_count, format),
            watchers: formatNumber(data.subscribers_count, format)
        };
    }

    function renderTemplate(template, values) {
        return template.replace(/\{(\w+)\}/g, (match, key) => (
            Object.prototype.hasOwnProperty.call(values, key) ? values[key] : match
        ));
    }

    function inferStatName(element) {
        if (element.dataset.githubStat) return element.dataset.githubStat;
        if (element.hasAttribute('data-github-stars')) return 'stars';
        if (element.hasAttribute('data-github-forks')) return 'forks';
        return 'stars';
    }

    function defaultTemplateFor(element) {
        const statName = inferStatName(element);
        if (Object.prototype.hasOwnProperty.call(element.dataset, 'githubTemplate')) {
            return element.dataset.githubTemplate;
        }
        if (Object.prototype.hasOwnProperty.call(element.dataset, 'githubStarsTemplate')) {
            return element.dataset.githubStarsTemplate;
        }
        if (STAT_FIELDS[statName]) return `{${statName}}`;
        return '{stars}';
    }

    function applyRepoData(element, data) {
        const repo = element.dataset.githubRepo;
        const format = element.dataset.githubFormat;
        const values = templateValues(repo, data, format);
        const text = renderTemplate(defaultTemplateFor(element), values);

        element.textContent = text;

        if (element.dataset.countFrom !== undefined || element.dataset.originalStat) {
            element.dataset.originalStat = text;
        }

        if (element.dataset.githubAltTemplate) {
            element.setAttribute('alt', renderTemplate(element.dataset.githubAltTemplate, values));
        }

        if (element.dataset.githubLabelTemplate) {
            element.setAttribute('aria-label', renderTemplate(element.dataset.githubLabelTemplate, values));
        }

        if (element.dataset.githubTitleTemplate) {
            element.setAttribute('title', renderTemplate(element.dataset.githubTitleTemplate, values));
        }
    }

    async function updateGitHubRepoStats(root = document) {
        const elements = [];
        if (root.nodeType === Node.ELEMENT_NODE && root.matches('[data-github-repo]')) {
            elements.push(root);
        }
        elements.push(...Array.from(root.querySelectorAll('[data-github-repo]')));

        await Promise.all(elements.map(async element => {
            try {
                const data = await fetchRepo(element.dataset.githubRepo);
                applyRepoData(element, data);
            } catch (error) {
                console.warn('Could not update GitHub repo stats:', error);
            }
        }));
    }

    window.updateGitHubRepoStats = updateGitHubRepoStats;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => updateGitHubRepoStats());
    } else {
        updateGitHubRepoStats();
    }
})();
