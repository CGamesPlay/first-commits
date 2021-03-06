# First Commits

Man, I hate setting up new projects. It feels like every time I want to try out some prototype, I have to spend a few hours messing with configuration to get things working, and then after a few days of hacking I'll invariably discover something that I forgot to do and requires me diving back into config file hell to resolve. So, this repository is my attempt to keep a single copy of all of this knowledge committed, and when I want to start a new project, I'll come here, make the first commit, and then copy it to a new project.

All of these projects use TypeScript, ESLint, and Jest. Those targeting the web use React, although it should generally be easy to remove the React dependency where this is not desired.

## Usage

Run `robot create PACKAGE DEST` in the repo root.

```bash
cd first-commits
robo create next ~/code/new-project
cd ~/code/new-project
yarn
yarn dev
```

## Acceptance Criteria

If we're using some piece of technology, what do we want to get out of it? These checklists correspond to manual checks that get done before I consider the first commit done. Many of these checks seem patently obvious, and yet they are all here because they were bugs in the configuration at one point or another.

#### Basics

- [ ] TypeScript is supported (though actual type checking may be done as a separate build step).
- [ ] The development mode supports automatic reloading or hot module loading.
- [ ] The project builds into production mode properly.
- [ ] There is a way to run ad-hoc scripts.

#### TypeScript

- [ ] It detects errors in files.

#### Jest

- [ ] It detects and runs tests.
- [ ] It can import other files.
- [ ] Files imported from tests can import other files.
- [ ] It type-checks test files and imported files.

#### ESLint

- [ ] It detects errors in the source files.

#### Asset type: CSS

- [ ] The development server imports CSS modules and adds them to the DOM.
- [ ] TypeScript understands the type of the import.
- [ ] Jest mocks the value with `identity-obj-proxy`.

#### Asset type: Static file

- [ ] The development server allows the import of the static file and returns a URL where it serves the file at.
- [ ] TypeScript understands the type of the import.
- [ ] Jest mocks the value to the URL.

### Integration tests

Some of the packages have integration tests useful for verifying behaviors after upgrading the dependencies. For more information, run `robo help` in the repo root.

## See Also

The helper scripts are managed using [robo](https://github.com/tj/robo). Install robo or look at `robo.yml` for more information.
