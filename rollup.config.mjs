import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/wfrp2e.js',
  output: {
    file: 'dist/wfrp2e.js',
    format: 'es'
  },
  plugins: [
    postcss({
      extract: 'dist/wfrp2e.css',
      minimize: true
    }),
    copy({
      targets: [
        { src: 'system.json', dest: 'dist' },
        { src: 'template.json', dest: 'dist' },
        { src: 'lang', dest: 'dist' },
        { src: 'static/**/*', dest: 'dist' },
        { src: 'packs/**/*', dest: 'dist/packs' }
      ]
    })
  ],
  external: []
};
