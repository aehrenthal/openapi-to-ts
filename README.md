# openapi-to-ts

TypeScript type generator for OpenAPI 3.0 specification files.

## Warning

This package is still in its alpha version. It has not been tested yet and it still misses essential features, such as:

- allOf
- anyOf
- oneOf
- object
- additionalProperties

Please only use this package with caution!

## Features

- Generate TypeScript types from OpenAPI 3.0 specification files using Node.js.
- Supports YAML and JSON specification files.
- Retrieve specification files from the file system or remote sources.
- Tiny sizes with constant performance optimizations.

## Install

```shell
npm install openapi-to-ts
```

or

```shell
yarn add openapi-to-ts
```

## CLI Usage

To generate TypeScript types from the local file system, run the following command in your console:

```shell
openapi-to-ts -i ./example/example.yaml -o ./example/example.ts
```

To generate TypeScript types from a remote source, run the following command in your console:

```shell
openapi-to-ts -i https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml -o ./example/example.ts
```

## Node.js USAGE

TBD

## Optional Options

TBD

## Contributors

TBD
