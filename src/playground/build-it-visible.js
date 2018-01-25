const appRoot = document.getElementById('app');
const app = {
    title: 'Visibility toggle',
    details: 'Here are some details...',
    detailsAreShowed: ''
};

const toggleVisibility = () => {
    app.detailsAreShowed = !app.detailsAreShowed;
    render();
    // My first (very inefficient) solution:
    //  if (!app.detailsAreShowed) {
    //     app.detailsAreShowed = 'true';
    //     render();
    // } else {
    //     app.detailsAreShowed = '';
    //     render();
    // }
};

const showDetails = () => {
    if (app.detailsAreShowed) {
        return app.details;
    } else {
        return ' ';
    }
render();
};

const render = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            <button onClick={toggleVisibility}> {app.detailsAreShowed ? 'Hide' : 'Show'} details </button>
            <p> {showDetails()} </p>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();