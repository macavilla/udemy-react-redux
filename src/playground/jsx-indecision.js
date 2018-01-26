console.log('App.js is running');

const app = {
    title: ' Indecision app',
    subtitle: ' An app for indecision. Or not',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const removeAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
   const randomNum = Math.floor((Math.random() * app.options.length) + 0);
   const option = app.options[randomNum];
   alert(option);
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle && app.subtitle.length > 0) && <h3> {app.subtitle}  </h3>}
            <p>  {app.options.length > 0 ? 'Here are your options:' : 'You have no options'} </p>
            <button onClick={onMakeDecision} disabled={app.options.length === 0}>What should I do?</button>
            <button onClick={removeAll}> Remove all</button>

            <ol>
                {
                    app.options.map((option) => {
                        return <li key={app.options.indexOf(option)} > {option} </li>
                    })
                }
            </ol>
            <form action="" onSubmit={onFormSubmit} >
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
render();
