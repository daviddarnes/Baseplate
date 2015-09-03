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
        default: "BaseKit Template"
      },
      {
        type: 'input',
        name: 'folder',
        message: 'Whats the folder name of your template?',
        default: "basekit-template"
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your template:',
        default: "A BaseKit template"
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
      this.destinationPath(this.props.folder + '/thumbnail.png')
    );

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath(this.props.folder + '/README.md'),
      {
        name: this.props.name,
        description: this.props.description
      }
    );

    this.fs.copyTpl(
      this.templatePath('metadata.json'),
      this.destinationPath(this.props.folder + '/metadata.json'),
      {
        name: this.props.name
      }
    );
  }

});
