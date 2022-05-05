# Welcome to Remix!

This starter pack features Remix configured with Jest and ESLint. It includes a command runner.

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

To run CLI commands:

```bash
yarn cli command
```

## Deployment

First, build your app for production:

```sh
yarn build
```

The artifacts that need to be deployed are in `build` and `public/build`.

Then run the app in production mode:

```sh
yarn start
```

To run CLI commands on the production server, invoke the CLI directly:

```bash
node build/cli.js command
```
