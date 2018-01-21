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

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var setupReset = function setupReset() {
    console.log('setupReset');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Count: ',
        count,
        ' '
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        ' -1 '
    ),
    React.createElement(
        'button',
        { onClick: setupReset },
        ' Reset '
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        ' +1 '
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
