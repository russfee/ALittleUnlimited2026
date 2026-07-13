# Project Working Notes

Before making changes, inspect the current code and `PROJECT_STATUS.json` so you understand the active focus and handoff.

## Session wrap (required)

After every meaningful edit, update `PROJECT_STATUS.json` before ending the session. Keep it concise and valid JSON. Refresh the current focus, latest meaningful change, who has the next move, next actions, risks, health, and `lastUpdated`; FS Office reads this file directly.

Use `npm run lint` and `npm run build` to validate application changes.
