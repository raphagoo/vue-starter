# vue-starter

vueJs starter kit, based on my own (and very light) [react experience](https://github.com/psancho/gotoReact)


[![Dependency Status](https://david-dm.org/psancho/vue-starter/status.svg)](https://david-dm.org/psancho/vue-starter#info=dependencies) [![devDependency Status](https://david-dm.org/psancho/vue-starter/dev-status.svg)](https://david-dm.org/psancho/vue-starter#info=devDependencies)

Here is a more complete [description](./description.md).

## Main features

* Babel
* VueJS
* Webpack
* ESLint

## Quick start

```bash
# Clone this repo
git clone https://github.com/psancho/vue-starter.git vue-starter

# change directory to your app
cd vue-starter

# install the dependencies with npm
npm i

# start the server
npm start
```

Go to http://localhost:8081 in your browser.

Note you can change the port:

* either in the `scripts` section of the `package.json`

  ```json
  "start": "webpack-dev-server --hot --port 9000"
  ```

* or in `webpack.config.js` (see [devServe.port](https://webpack.js.org/configuration/dev-server/#devserverport) doc).

  ```javascript
  module.exports = {
      //...
      devServer: {
          port: 9000
      }
  };
  ```

## Building the app

Just launch the following:

```bash
npm run build
```

## License

[MIT](./LICENCE)