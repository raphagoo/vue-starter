# Full description

Exhaustive list of material can be found here: [vuejs/awesome-vue](https://github.com/vuejs/awesome-vue).

## Packages

Here is the commented list of dependencies.

### frontend

* [ ] [`@babel/polyfill`](https://babeljs.io/docs/en/next/babel-polyfill.html) *Polyfill (old browsers compatibility)*
* [ ] [`lodash`](https://www.npmjs.com/package/lodash)
* [ ] [`promise-polyfill`](https://www.npmjs.com/package/promise-polyfill) *not sure if needed with preset-env*
* [x] [`vue`](https://www.npmjs.com/package/vue) *the Main thing*
* [x] [`vue-router`](https://router.vuejs.org/) *the official one*
* [x] [`vuex`](https://vuex.vuejs.org/) *state management pattern for Vue*

### dev

* [x] [`@babel/core`](https://babeljs.io/docs/en/next/babel-core.html)
* [ ] [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html)
* [ ] [`@babel/preset-env`](https://babeljs.io/docs/en/next/babel-preset-env.html) *detects witch ES version is used (2015, 2016 or 2017)*
* [ ] [`@types/lodash`](https://www.npmjs.com/package/@types/lodash) *???*
* [ ] [`@vue/babel-preset-jsx`](https://www.npmjs.com/package/@vue/babel-preset-jsx) *JSX templates can be used*
* [ ] [`@vue/babel-helper-vue-jsx-merge-props`](https://www.npmjs.com/package/@vue/babel-helper-vue-jsx-merge-props) *used by @vue/babel-preset-jsx*
* [ ] [`@vue/test-utils`](https://vue-test-utils.vuejs.org/) *test library*
* [ ] [`autoprefixer`](https://www.npmjs.com/package/autoprefixer) *postcss plugin that adds vendor prefixes to CSS*
* [ ] [`babel-eslint`](https://www.npmjs.com/package/babel-eslint) *lints ES6 code*
* [x] [`babel-loader`](https://www.npmjs.com/package/babel-loader)
* [ ] [`babel-preset-vue-app`](https://www.npmjs.com/package/babel-preset-vue-app) *???*
* [ ] [`chalk`](https://www.npmjs.com/package/chalk) *colorizes console output*
* [ ] [`cross-env`](https://www.npmjs.com/package/cross-env) *run scripts that set and use environment variables across platforms, ie. on Windows*
* [x] [`css-loader`](https://www.npmjs.com/package/css-loader) *interprets `@import` & `url()` as `import`*
* [x] [`eslint`](https://www.npmjs.com/package/eslint)
* [x] [`eslint-loader`](https://www.npmjs.com/package/eslint-loader)
* [ ] [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
* [x] [`eslint-plugin-vue`](https://www.npmjs.com/package/eslint-plugin-vue)
* [x] [`html-webpack-plugin`](https://www.npmjs.com/package/html-webpack-plugin) *simplifies creation of HTML files*
* [ ] [`html-loader`](https://www.npmjs.com/package/html-loader) *better than `raw-loader`*
* [ ] [`mini-css-extract-plugin`](https://www.npmjs.com/package/mini-css-extract-plugin) *replaces `extract-text-webpack-plugin` and works with webpack 4*
* [ ] [`minimist`](https://www.npmjs.com/package/minimist) *commandline parser*
* [x] [`node-sass`](https://www.npmjs.com/package/node-sass)
* [ ] [`postcss-loader`](https://www.npmjs.com/package/postcss-loader) *adds vendor rules*
* [ ] [`rimraf`](https://www.npmjs.com/package/rimraf) *deletes recursively a directory*
* [x] [`sass-loader`](https://www.npmjs.com/package/sass-loader)
* [ ] [`style-loader`](https://www.npmjs.com/package/style-loader) *adds CSS to the DOM by injecting a `style` tag*
* [x] [`vue-loader`](https://vue-loader.vuejs.org)
* [ ] [`vue-style-loader`](https://www.npmjs.com/package/vue-style-loader)
* [x] [`vue-template-compiler`](https://www.npmjs.com/package/vue-template-compiler) *needed by vue-loader: MUST be the same version as `vue`*
* [x] [`webpack`](https://www.npmjs.com/package/webpack) *module bundler + build tool*
* [ ] [`webpack-bundle-analyzer`](https://www.npmjs.com/package/) *visual analyser*
* [x] [`webpack-cli`](https://www.npmjs.com/package/webpack-cli): *needed with webpack ^4.0.1*
* [x] [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server) *dev server with hot reload*
* [ ] [`webpack-merge`](https://www.npmjs.com/package/webpack-merge) *merge 2 objects*
* [ ] [`webpack-serve`](https://www.npmjs.com/package/webpack-serve) *serve locally for dev purpose*

## TODO

* build for prod
* manage baseHref
* choose and add XHR facilities:
  * [ ] [`axios`](https://www.npmjs.com/package/axios) *needs 3rd party Promise polyfill*
  * [ ] [`whatwg-fetch`](https://github.com/github/fetch) *isomorphic fetch, lower level than the former*
  * [ ] [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch) *another isomorphic fetch*
* choose a CSS framework (not sure if I'll do that):
  * [Evaluating CSS Frameworks](https://codeburst.io/evaluating-css-frameworks-bulma-vs-foundation-vs-milligram-vs-pure-vs-semantic-vs-uikit-503883bd25a3)
  * [Framework Smackdown: Bootstrap vs Semantic-UI](https://hostpresto.com/blog/framework-smackdown-bootstrap-vs-semantic-ui/)
  * [Twitter Bootstrap vs. Semantic UI](https://www.upwork.com/hiring/development/twitter-bootstrap-vs-semantic-ui/)
  * [ ] [Avalanche](http://colourgarden.net/avalanche/) *grid system*
* other things:
  * [ ] [`mini-css-extract-plugin`](https://vue-loader.vuejs.org/guide/extract-css.html) *to have css hot reload*
  * read again vueJs doc (many things I didn't had time to try).

## PS

I don't like 2 spaces indents