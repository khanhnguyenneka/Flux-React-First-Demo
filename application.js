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
var element = React.createElement(ThumnailList, options);

//React, after render, please place it in body tag
React.render(element, document.querySelector('.container'));
//Define a class
var Badge = React.createClass({displayName: "Badge",
    //this.pros // {}
    //class must have render method return React components
    render: function () {
        return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
            this.props.title, 
            React.createElement("span", {className: "badge"}, this.props.number)
        )
    }
});

var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function () {
        return React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageUrl}), 
            React.createElement("div", {className: "caption"}, 
                React.createElement("h3", null, this.props.header), 
                React.createElement("p", null, this.props.description), 
                React.createElement("p", null, 
                    React.createElement(Badge, {title: this.props.title, number: this.props.number})
                )
            )
        )
    }
});

var ThumnailList = React.createClass({displayName: "ThumnailList",
    render: function () {
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });
        return React.createElement("div", null, 
            list
        )
    }
});
