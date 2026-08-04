import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Four content types, one publishing pipeline. Adding an entry to any of these
// is a markdown file, not a hand-written HTML page.
//
// Field names follow OUTBOX/BRESCH_IO_CONTENT/COLLECTION_SCHEMA.md so the
// staged WS4 content validates without re-emission. Where this file adds
// fields, they are optional and defaulted.

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    // bresch.io is canonical. This records where the Substack mirror lives so
    // the post can link out to it — it is NOT used as our canonical target.
    substackUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
  }),
});

const build = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/build' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    repo: z.string().url(),
    stack: z.array(z.string()).default([]),
    status: z.enum(['shipped', 'experiment', 'archived']).default('experiment'),
    draft: z.boolean().default(false),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    description: z.string(),
    tools: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),

    // Media beyond a still hero. The five ported projects are MP4 captures and
    // one YouTube embed; `heroImage` alone cannot express those.
    media: z.string().optional(),
    mediaType: z.enum(['video', 'image', 'youtube']).default('image'),
    // Portrait phone captures get the centred, height-constrained layout.
    orientation: z.enum(['landscape', 'portrait']).default('landscape'),
    // Tie-breaker within a year; lower sorts first.
    order: z.number().default(99),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // YouTube id — video is embedded, never self-hosted.
    youtube: z.string().optional(),
    episode: z.number().optional(),
    duration: z.string().optional(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { writing, build, work, lessons };
