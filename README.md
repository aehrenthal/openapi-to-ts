<h1 align="center">
  🌅 openapi-to-ts
</h1>

<p align="center">
  TypeScript type generator for OpenAPI 3.0 specification files.
</p>

## Example

- Input: [OpenAPI 3.0 YAML file](./examples/example.yaml)
- Output: [TypeScript interfaces and types](./examples/example.ts)

## Features

- Generates TypeScript types from OpenAPI 3.0 specification files using Node.js.
- Retrieves specification files from the file system or remote sources.
- Supports YAML and JSON specification files.
- Generates interfaces and types.
- Tiny size with only a few dependencies.

## Install

```shell
npm install openapi-to-ts --save-dev
```

or

```shell
yarn add openapi-to-ts --dev
```

## CLI Usage

To generate TypeScript types from the local file system, run the following command in your console:

```shell
npx openapi-to-ts -i ./examples/example.yaml -o ./examples/example.ts
```

To generate TypeScript types from a remote source, run the following command in your console:

```shell
npx openapi-to-ts -i https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml -o ./examples/example.ts
```

## CLI Options

| Option        | Alias | Required | Default | Description                                                                |
| ------------- | ----- | -------- | ------- | -------------------------------------------------------------------------- |
| --input       | -i    | Yes      |         | Specifies the OpenAPI 3.0 specification file that should be converted.     |
| --output      | -o    | Yes      |         | Specifies the output file where the TypeScript types should be written to. |
| --prefixWithI |       | No       | false   | Appends the letter `I` as a prefix to all interface names.                 |

## Planned Improvements

- Add an option to run prettier on the generated TS file.
- Allow fetching OpenAPI files from private GitHub repos.
- Implement additionalProperties.
- Allow usage from Node.js and not just the CLI.
- Cover the codebase with tests.

## Bugs

Found a bug? Please report it [here](https://github.com/aehrenthal/openapi-to-ts/issues) and I would be happy to take a look. Contributions are more than welcome too!
