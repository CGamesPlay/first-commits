# First Commits

Man, I hate setting up new projects. It feels like every time I want to try out some prototype, I have to spend a few hours messing with configuration to get things working, and then after a few days of hacking I'll invariably discover something that I forgot to do and requires me diving back into config file hell to resolve. So, this repository is my attempt to keep a single copy of all of this knowledge committed, and when I want to start a new project, I'll come here, make the first commit, and then copy it to a new project.

All of these projects use TypeScript, ESLint, and Jest. Those targeting the web use React, although it should generally be easy to remove the React dependency where this is not desired.

## Usage

Copy the subdirectory you want to use into a new git repository.

## Acceptance Criteria

If we're using some piece of technology, what do we want to get out of it? These checklists correspond to manual checks that get done before I consider the first commit done. Many of these checks seem patently obvious, and yet they are all here because they were bugs in the configuration at one point or another.

#### Basics

- [ ] TypeScript is supported (though actual type checking may be done as a separate build step).
- [ ] The development mode supports automatic reloading or hot module loading.
- [ ] The project builds into production mode properly.
- [ ] There is a way to run ad-hoc scripts.

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