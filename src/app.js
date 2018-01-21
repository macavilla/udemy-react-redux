console.log('App.js is running');

const app = {
    title: ' Indecision app',
    subtitle: ' An app for indecision. Or not',
    options: ['First option', 'Second option']
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle && app.subtitle.length > 0) && <h3> {app.subtitle}  </h3>}
        <p>  {app.options.length > 0 ? 'Here are your options:' : 'You have no options'} </p>
        <ol>
            <li> </li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {console.log('addOne')};
const setupReset = () => {console.log('setupReset')};
const minusOne = () => {console.log('minusOne')};

const templateTwo = (
    <div>
        <h1> Count: {count} </h1>
        <button onClick = {minusOne} > -1 </button>
        <button onClick = {setupReset} > Reset </button>
        <button onClick = {addOne} > +1 </button>
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);