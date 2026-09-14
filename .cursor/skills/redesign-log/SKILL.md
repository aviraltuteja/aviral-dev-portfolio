---
name: redesign-log
description: Audits the portfolio codebase and appends a change entry to REDESIGN.md covering changes made, files added, functions no longer needed, and files no longer needed. Use when the user asks to log redesign progress, update the redesign log, or record what changed during the redesign.
disable-model-invocation: true
---

# Redesign Log

Read-only audit of `aviral-dev-portfolio`, written up as one new entry in section 8 of `REDESIGN.md`.

## Hard constraints

This skill **only reads code and edits `REDESIGN.md`**. Nothing else.

- Do **not** edit, create, move, or delete any source file, asset, config, or dependency.
- Do **not** delete or "clean up" anything identified as dead — only record it.
- Do **not** run `next build`, `next dev`, `npm install`, or any command that writes to the repo.
- Do **not** commit, stage, or push.
- Do **not** rewrite earlier entries or the brief (sections 1–7). Append only, with one exception: the **Open dead-code candidates** table is updated in place.

Read-only shell commands (`git status`, `git diff`, `git log`, `rg`) are fine.

## Workflow

```
- [ ] 1. Establish the window since the last entry
- [ ] 2. Diff the code
- [ ] 3. Hunt for dead code
- [ ] 4. Write the entry
- [ ] 5. Reconcile the dead-code table
```

### 1. Establish the window

Read section 8 of `REDESIGN.md`. Take the date and, if present, the commit SHA from the newest entry. That is the start of the window. If there are no entries, the window starts at the baseline inventory in section 7.

Record the current `git rev-parse --short HEAD` for the new entry.

### 2. Diff the code

```bash
git status --porcelain
git diff --stat <last-sha>..HEAD
git diff <last-sha>..HEAD
```

Include uncommitted work — the redesign moves faster than commits do. If no SHA is available, compare the working tree against section 7's baseline inventory instead.

For each touched file, determine what changed *design-wise*, not just line-wise: which tokens replaced which hardcoded values, which fonts were swapped, which components were restructured.

### 3. Hunt for dead code

Four checks, each against the whole repo:

1. **Unreferenced files** — for every file in `components/`, `lib/`, and `app/`, search for imports of it. Zero importers (and not a route/layout file) means unused.
2. **Unreferenced exports** — for every exported function, component, or hook, search for call sites and imports. Count only real usage, not the definition.
3. **Orphaned assets** — for every file in `public/`, search for its filename across the repo. Matches only inside comments count as orphaned; say so.
4. **Stale styling** — hex values, Tailwind arbitrary-value classes, or CSS variables that are not in the palette from section 3, plus classes referencing undefined tokens.

Use `rg` for these, e.g. `rg -n "skills-and-projects"` or `rg -n "#[0-9a-fA-F]{6}" --glob '!node_modules'`.

Flag with confidence, and say which it is:
- **Confirmed dead** — zero references anywhere.
- **Likely dead** — referenced only from code that is itself dead, or only from comments.
- **Superseded** — replaced by a redesigned equivalent but still imported somewhere.

When something looks dead but the redesign might still want it, note that rather than dropping it from the list.

### 4. Write the entry

Insert directly under the `### Entries` heading in section 8 of `REDESIGN.md`, above any existing entries. Omit a subsection entirely if it has nothing to report — do not write "none" under every heading.

```markdown
#### YYYY-MM-DD — <short title of this batch of work>

**Commit range:** `<last-sha>..<current-sha>` (+ N uncommitted files)
**Scope:** <one sentence: which pages/components this batch touched>

**Changes made**
- `path/to/file.tsx` — what changed and why, in design terms
- `app/globals.css` — tokens added/removed

**Files added**
- `path/to/new-file.tsx` — what it is, what it replaces

**Functions no longer needed**
- `functionName()` in `path/to/file.tsx` — Confirmed dead / Likely dead / Superseded. Reason.

**Files no longer needed**
- `path/to/file.tsx` — Confirmed dead / Likely dead / Superseded. Reason.

**Notes**
- Anything that needs a human decision before deletion
```

Entry rules:
- Date from the system clock, `YYYY-MM-DD`.
- Every dead-code item names its reason and its confidence level. "Unused" alone is not enough — the point of the log is to be trustworthy at deletion time, weeks later.
- Reference concrete paths and symbol names. No vague summaries.
- Keep each bullet to one or two lines.
- If nothing changed since the last entry, do not write a new entry. Say so in the reply instead.

### 5. Reconcile the dead-code table

Update the **Open dead-code candidates** table in section 8:

- **Add** newly flagged items, with `First flagged` set to this entry's date.
- **Remove** rows whose item was deleted or brought back into use during this window, and note the resolution in the entry's Changes made or Notes.
- **Update** the Status text of rows whose situation changed (e.g. a file that was "likely dead" is now confirmed dead).

Leave `First flagged` untouched on existing rows.

## Reply to the user

After writing, report in the chat: the number of files changed in this window, counts per category, and any item that is now confirmed dead and safe to delete. Explicitly state that nothing was deleted.
