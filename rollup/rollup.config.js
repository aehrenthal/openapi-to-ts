import {eslint} from 'rollup-plugin-eslint';
import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const path = require('path');

const packageJson = require(path.resolve(process.cwd(), './package.json'));

export default {
  input: path.resolve(process.cwd(), './src/index.ts'),
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({clean: true}),
    eslint(),
    terser({
      output: {comments: false},
      compress: {
        drop_console: true
      }
    })
  ]
};
