<h1 align="center">
  🌅 openapi-to-ts
</h1>

<p align="center">
  TypeScript type generator for OpenAPI 3.0 specification files.
</p>

<div align="center">

[![npm downloads](https://img.shields.io/npm/dm/openapi-to-ts.svg?style=for-the-badge)](https://www.npmjs.com/package/openapi-to-ts)
[![npm](https://img.shields.io/npm/dt/openapi-to-ts.svg?style=for-the-badge)](https://www.npmjs.com/package/openapi-to-ts)
[![npm](https://img.shields.io/bundlephobia/minzip/openapi-to-ts?style=for-the-badge)](https://bundlephobia.com/result?p=openapi-to-ts)

</div>

## Example

- Input: [OpenAPI 3.0 YAML file](./examples/example.yaml)
- Output: [TypeScript interfaces and types](./examples/example.ts)

## Features

- Generates TypeScript types from OpenAPI 3.0 specification files using Node.js.
- Retrieve specification files from local or remote sources, including private GitHub repos.
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

| Option                | Alias | Required | Default | Description                                                                          |
| --------------------- | ----- | -------- | ------- | ------------------------------------------------------------------------------------ |
| --input [input]       | -i    | Yes      |         | Specifies the OpenAPI 3.0 specification file that should be converted.               |
| --output [output]     | -o    | Yes      |         | Specifies the output file where the TypeScript types should be written to.           |
| --githubToken [token] |       | No       |         | Attach a GitHub personal access token to the request if fetching the input remotely. |
| --prefixWithI         |       | No       | false   | Appends the letter `I` as a prefix to all interface names.                           |

### Input & Output

The input option allows you to define the location of the OpenAPI 3.0 specification file that you would like to convert. The location could be on your local file system or a remote source such as a GitHub repository.

The output option allows you to define the path to which you would like to write the generated types. The output path must be on your local file system.

To convert a specification file from your local file system you can run:

```shell
npx openapi-to-ts -i <PATH_TO_SPEC_FILE> -o <PATH_TO_OUTPUT>
```

This command will convert the specification file located at `<PATH_TO_SPEC_FILE>` to TypeScript types and write them to `<PATH_TO_OUTPUT>`.

To convert a specification file from a remote source, such as a GitHub repository you can run:

```shell
npx openapi-to-ts -i <URL_TO_SPEC_FILE> -o <PATH_TO_OUTPUT>
```

This command will fetch the specification file from the link specified above, convert it to TypeScript types and write the final output to the specified location.

### GitHub Token for Private Repositories

If your OpenAPI 3.0 specification file is located in a private GitHub repository, you can use the `--githubToken <token>` option. This will attach your personal access token to the request that fetches the remotely stored specification file. For more information on how to create a personal access token in GitHub, please [click here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

To use this option, please run:

```shell
npx openapi-to-ts -i <URL_TO_SPEC_FILE> -o <PATH_TO_OUTPUT> --githubToken <YOUR_PERSONAL_ACCESS_TOKEN>
```

### Interface Prefixes

If your schema is called `Cat`, by default openapi-to-ts will generate the interface with the name `Cat`. However, you can optionally supply the `--prefixWithI` option to append the letter `I` to the interface's name. If you do so, the schema by the name of `Cat` will be converted to an interface called `ICat`.

To use this option, please run:

```shell
npx openapi-to-ts -i <PATH_TO_SPEC_FILE> -o <PATH_TO_OUTPUT> --prefixWithI
```

## Planned Improvements

- Add an option to run prettier on the generated TS file.
- Implement additionalProperties.
- Allow usage from Node.js and not just the CLI.
- Cover the codebase with tests.

## Bugs

Found a bug? Please report it [here](https://github.com/aehrenthal/openapi-to-ts/issues), and I would be happy to take a look. Contributions are more than welcome too!
