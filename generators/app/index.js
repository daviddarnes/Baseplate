'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Basekit Template') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Whats the name of your template?',
        default: 'BaseKit Template'
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Whats the folder name of your template?',
        default: 'basekit-template'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your template:',
        default: 'A BaseKit template'
      },
      {
        type: 'input',
        name: 'backgroundcolour',
        message: 'Background colour of your template:',
        default: '#ffffff'
      },
      {
        type: 'input',
        name: 'contrastcolour',
        message: 'Contrast colour of your template, e.g. links:',
        default: '#3295e1'
      },
      {
        type: 'input',
        name: 'buttoncolour',
        message: 'The colour of your buttons:',
        default: '#444444'
      },
      {
        type: 'input',
        name: 'titlecolour',
        message: 'The colour of your titles:',
        default: '#333333'
      },
      {
        type: 'input',
        name: 'paragraphcolour',
        message: 'The colour of your body copy:',
        default: '#333333'
      },
      {
        type: 'input',
        name: 'navtextcolour',
        message: 'The colour of your navigation items:',
        default: '#333333'
      },
      {
        type: 'input',
        name: 'headerbackgroundcolour',
        message: 'The background colour of your header:',
        default: '#F1F1F1'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function() {
    this.fs.copyTpl(
      this.templatePath('default.twig'),
      this.destinationPath(this.props.folder + '/default.twig')
    );
    this.fs.copyTpl(
      this.templatePath('layout.twig'),
      this.destinationPath(this.props.folder + '/layout.twig')
    );
    this.fs.copyTpl(
      this.templatePath('stylesheet.less'),
      this.destinationPath(this.props.folder + '/stylesheet.less')
    );
    this.fs.copyTpl(
      this.templatePath('thumbnail.png'),
      this.destinationPath(this.props.folder + '/' + this.props.folder + '.png')
    );
    this.fs.copyTpl(
      this.templatePath('less/*'),
      this.destinationPath(this.props.folder + '/less/')
    );
    this.fs.copyTpl(
      this.templatePath('images/logo.png'),
      this.destinationPath(this.props.folder + '/images/logo.png')
    );
    this.fs.copyTpl(
      this.templatePath('images/feature.jpg'),
      this.destinationPath(this.props.folder + '/images/feature.jpg')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.props.folder + '/README.md'),
      {
        name: this.props.name,
        description: this.props.description,
        backgroundcolour: this.props.backgroundcolour,
        contrastcolour: this.props.contrastcolour,
        buttoncolour: this.props.buttoncolour,
        titlecolour: this.props.titlecolour,
        paragraphcolour: this.props.paragraphcolour,
        navtextcolour: this.props.navtextcolour,
        headerbackgroundcolour: this.props.headerbackgroundcolour
      }
    );

    this.fs.copyTpl(
      this.templatePath('metadata.json'),
      this.destinationPath(this.props.folder + '/metadata.json'),
      {
        name: this.props.name,
        folder: this.props.folder,
        description: this.props.description,
        backgroundcolour: this.props.backgroundcolour,
        contrastcolour: this.props.contrastcolour,
        buttoncolour: this.props.buttoncolour,
        titlecolour: this.props.titlecolour,
        paragraphcolour: this.props.paragraphcolour,
        navtextcolour: this.props.navtextcolour,
        headerbackgroundcolour: this.props.headerbackgroundcolour
      }
    );
  }

});
