import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const path = require('path');

const packageJson = require(path.resolve(process.cwd(), './package.json'));

const name = 'OpenAPIToTS';

export default {
  input: path.resolve(process.cwd(), './src/index.ts'),
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      name,
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      name,
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      clean: true,
      tsconfig: path.resolve(process.cwd(), './tsconfig.json')
    }),
    resolve(),
    commonjs(),
    terser({
      output: {comments: false},
      compress: {
        drop_console: true
      }
    })
  ]
};
