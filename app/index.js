'use strict';
var yeoman = require('yeoman-generator'),
  chalk = require('chalk'),
  slugify = require('underscore.string/slugify'),
  camelize = require('underscore.string/camelize'),
  NpmGenerator

NpmGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json')

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall()
      }
    })
  },
  askFor: function () {
    var done = this.async()

    // have Yeoman greet the user
    this.log(this.yeoman)

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic TypeScript Npm generator.'))

    var prompts =[{
      name: 'moduleName',
      message: 'What is the name of your module?',
      default: slugify(this.appname)
    }]

    prompts.push({
      name: 'moduleDescription',
      message: 'What is the description of the module?'
    })

    prompts.push({
      name: 'authorName',
      message: 'What is your github user name?'
    })

    prompts.push({
      name: 'fullName',
      message: 'What is your name?'
    })

    prompts.push({
      name: 'emailAddress',
      message: 'What is your email address?'
    })

    this.prompt(prompts, function (props) {
      this.moduleName = props.moduleName
      this.moduleDescription = props.moduleDescription
      this.authorName = props.authorName
      this.fullName = props.fullName
      this.emailAddress = props.emailAddress

      this.currentYear = new Date().getFullYear()

      done()
    }.bind(this))
  },
  module: function () {
    this.mkdir('test')
    this.mkdir('src')
    this.template('_package.json', 'package.json')
    this.template('_README.md', 'README.md')
    this.template('_test.ts', 'test/index.spec.ts')
    this.template('_LICENSE', 'LICENSE')
    this.copy('babelrc', '.babelrc')
    this.copy('npmignore', '.npmignore')
    this.copy('tslint.json', 'tslint.json')
    this.copy('gulpfile.js', 'gulpfile.js')
    this.copy('tsconfig.json', 'tsconfig.json')
    this.copy('typings.json', 'typings.json')
    this.copy('gitignore', '.gitignore')
    this.copy('index.ts', 'src/index.ts')
  }
})

module.exports = NpmGenerator
