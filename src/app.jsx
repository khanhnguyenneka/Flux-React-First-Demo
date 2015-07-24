var React = require('react');
var Thumbnailist = require('./thumbnaillist');

var options = {
    thumbnailData:  [{
        title: 'Show Courses',
        number: 12,
        header: 'Learn React',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
        title: 'Show Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
        imageUrl: 'http://brunch.io/images/others/gulp.png'
    }]
};

//React, render a class
var element = React.createElement(Thumbnailist, options);

//React, after render, please place it in body tag
React.render(element, document.querySelector('.container'));