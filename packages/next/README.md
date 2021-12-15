# Next.js First Commit

This modifies the basic Next.js TypeScript starter to add a few features:

- Includes a command runner
  - Add commands like `lib/cli/greet.ts`
  - Run them with `next build && yarn cli greet`
- Use ts-jest so that tests are type checked.
- Configure ESLint with my opinionated defaults.
- Enable all of the strict mode checks for React and TypeScript.
