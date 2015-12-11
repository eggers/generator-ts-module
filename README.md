# generator-ts-module [![Build Status](https://secure.travis-ci.org/eggers/generator-ts-module.png?branch=master)](https://travis-ci.org/eggers/generator-ts-module)

> A [Yeoman](http://yeoman.io) generator for TypeScript NPM modules built off of [domharrington/generator-npm-module](http://github.com/domharrington/generator-npm-module)



## Getting Started

```
$ npm install -g yo generator-ts-module
```

Start the generator in a new directory and follow the instructions:

```
$ yo ts-module
```

That'll generate an npm project with a common tools setup. This includes:

* Filled `package.json` file
* [Gulp](http://gulpjs.com/) Task runner
* [TypeScript](https://babeljs.io/) Type checking (compiles to ES6 for async/await & generator support)
* [tslint](https://github.com/palantir/tslint) Linting and code style checking
* [Typings](https://github.com/typings/typings) The new way of managing TypeScript definition files 
* [Babel](https://babeljs.io/) ES2015 transpiler to get to ES5 code
* [Mocha](http://mochajs.org/) Unit testing
* [Chai](http://chaijs.com/) Assertion library
* [Travis CI](https://travis-ci.org/) Continuous integration
* [ISC License](https://spdx.org/licenses/ISC.html)

## License

ISC
