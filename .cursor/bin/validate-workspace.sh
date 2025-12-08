#!/bin/bash

# 🔍 workspace validation script
# Run this at start of each session to catch structure issues early

set -e

echo "🔍 Workspace Validation"
echo "================================="
echo ""

ERRORS=0
WARNINGS=0

# Check for duplicate .github/ directories
echo "1️⃣  Checking for duplicate .github/ directories..."
if [ -d "website/.github" ]; then
  echo "❌ ERROR: website/.github/ exists (GitHub Actions must be at repo root)"
  ERRORS=$((ERRORS + 1))
fi

if [ -d "app/.github" ]; then
  echo "⚠️  WARNING: app/.github/ exists"
  WARNINGS=$((WARNINGS + 1))
fi

echo "✅ Done"
echo ""

# Check for obsolete docs
echo "2️⃣  Checking for obsolete documentation..."
OBSOLETE_DOCS=(
  "website/CHANGELOG.md"
  "website/BLOG_WORKFLOW.md"
)

for doc in "${OBSOLETE_DOCS[@]}"; do
  if [ -f "$doc" ]; then
    echo "❌ ERROR: $doc exists (should be at root or deleted)"
    ERRORS=$((ERRORS + 1))
  fi
done

echo "✅ Done"
echo ""

# Check git status for structure issues
echo "3️⃣  Checking git status..."
UNTRACKED=$(git status --porcelain 2>/dev/null | grep "^\?\?" | wc -l)
if [ "$UNTRACKED" -gt 0 ]; then
  echo "⚠️  WARNING: $UNTRACKED untracked files"
  git status --porcelain | grep "^\?\?" | head -5
  WARNINGS=$((WARNINGS + 1))
fi

echo "✅ Done"
echo ""

# Summary
echo "================================="
echo "📊 Summary"
echo "================================="
echo "❌ Errors: $ERRORS"
echo "⚠️  Warnings: $WARNINGS"
echo ""

if [ "$ERRORS" -gt 0 ]; then
  echo "🚨 Structure validation FAILED"
  echo ""
  echo "Quick fixes:"
  echo "  rm -rf website/.github/"
  echo "  rm website/CHANGELOG.md"
  exit 1
else
  echo "✅ Workspace structure is VALID"
  exit 0
fi

