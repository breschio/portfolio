#!/usr/bin/env bash
set -euo pipefail

REPO="breschio/drawbridge"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

stars=$(curl -sf "https://api.github.com/repos/${REPO}" \
  | python3 -c "import sys,json; print(json.load(sys.stdin)['stargazers_count'])")

if [[ -z "$stars" || "$stars" == "0" ]]; then
  echo "Error: Could not fetch star count for ${REPO}" >&2
  exit 1
fi

echo "✦ ${REPO} has ${stars} stars"

update_file() {
  local file="$1"
  local pattern="$2"
  local replacement="$3"

  if [[ ! -f "$file" ]]; then
    return
  fi

  if grep -qE "$pattern" "$file"; then
    sed -i '' -E "s|${pattern}|${replacement}|g" "$file"
    echo "  Updated: ${file#"$ROOT/"}"
  fi
}

# v4 deck HTML — slide comment, heading text, and alt text
update_file "$ROOT/decks/v4/design-case-studies-deck.html" \
  '[0-9]+ Github Stars' \
  "${stars} Github Stars"

update_file "$ROOT/decks/v4/design-case-studies-deck.html" \
  '[0-9]+ Github Stars on Github' \
  "${stars} Github Stars on Github"

# v4 outline
update_file "$ROOT/decks/v4/outline.md" \
  'heading: [0-9]+ Github Stars' \
  "heading: ${stars} Github Stars"

# v4 resume summary
update_file "$ROOT/decks/v4/resume-summary.md" \
  '\*\*[0-9]+ GitHub Stars\*\*' \
  "**${stars} GitHub Stars**"

echo "✦ Done"
