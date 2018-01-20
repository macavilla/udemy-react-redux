'use strict';

console.log('App.js is running');

var app = {
    title: ' Indecision app',
    subtitle: ' An app for indecision. Or not',
    options: ['First option', 'Second option']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && app.subtitle.length > 0 && React.createElement(
        'h3',
        null,
        ' ',
        app.subtitle,
        '  '
    ),
    React.createElement(
        'p',
        null,
        '  ',
        app.options.length > 0 ? 'Here are your options:' : 'You have no options',
        ' '
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' '
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location,
            ' '
        );
    }
}

var user = {
    name: 'Maca Villa',
    age: 23,
    location: 'Buenos Aires'
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonimous',
        ' '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' Age: ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
