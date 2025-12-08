#!/bin/bash
# session capture script
# usage: ./capture-session.sh <size> <focus>
# example: ./capture-session.sh large "dashboard-redesign"

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
SESSIONS_DIR="$PROJECT_ROOT/docs/sessions"
DATE=$(date +"%Y-%m-%d")

SIZE="${1:-medium}"
FOCUS="${2:-work}"

if [[ ! "$SIZE" =~ ^(small|medium|large)$ ]]; then
  echo "❌ invalid size: $SIZE (must be small, medium, or large)"
  exit 1
fi

SESSION_DIR="$SESSIONS_DIR/$DATE"
mkdir -p "$SESSION_DIR"

SESSION_COUNT=$(ls -1 "$SESSION_DIR"/session-*.json 2>/dev/null | wc -l | tr -d ' ')
SESSION_NUM=$((SESSION_COUNT + 1))
SESSION_ID=$(printf "session-%02d-%s" "$SESSION_NUM" "$FOCUS")
SESSION_FILE="$SESSION_DIR/$SESSION_ID.json"

echo "📝 capturing session: $SESSION_ID"
echo "   size: $SIZE"
echo "   date: $DATE"

cd "$PROJECT_ROOT"

GIT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "main")
GIT_LAST_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "")

TEMPLATE_PATH="$HOME/.lumi/docs/templates/session-$SIZE-template.json"
if [ -f "$TEMPLATE_PATH" ]; then
  cp "$TEMPLATE_PATH" "$SESSION_FILE"
  sed -i '' "s|YYYY-MM-DD|$DATE|g" "$SESSION_FILE"
  sed -i '' "s|session-XX-focus|$SESSION_ID|g" "$SESSION_FILE"
else
  echo "{\"meta\":{\"date\":\"$DATE\",\"session_id\":\"$SESSION_ID\",\"size\":\"$SIZE\"}}" > "$SESSION_FILE"
fi

echo "✅ session captured: $SESSION_FILE"
echo ""
echo "next: edit $SESSION_FILE to fill in details"
