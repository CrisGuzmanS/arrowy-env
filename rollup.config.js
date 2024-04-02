import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.umd.cjs',
    format: 'umd',
    name: 'arrowy-env',
  },
  plugins: [
    resolve(),
    commonjs()
  ],

  external: ['dotenv']
};
