import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const path = require('path');

const packageJson = require(path.resolve(process.cwd(), './package.json'));

const name = 'OpenAPIToTS';

export default {
  input: path.resolve(process.cwd(), './src/index.ts'),
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      name
    },
    {
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      name
    }
  ],
  external: ['fs', 'os', 'tty', 'http', 'https', 'path'],
  plugins: [
    external(),
    typescript({
      clean: true,
      tsconfig: path.resolve(process.cwd(), './tsconfig.json')
    }),
    resolve(),
    commonjs(),
    terser({
      output: {
        comments: false
      }
    })
  ]
};
