'use strict';

console.log('App.js is running');

var app = {
    title: ' Indecision app',
    subtitle: ' An app for indecision. Or not',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeAll = function removeAll() {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    Math.floor(Math.random() * app.options.length + 0);
};

var render = function render() {
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
            'button',
            { onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: app.options.indexOf(option) },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { action: '', onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
render();
