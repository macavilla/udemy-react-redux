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

function getLocation(location) {
    if (location) {
        return <p>Location: {user.location} </p>;
    }
}

const user = {
    name: 'Maca Villa',
    age: 23,
    location: 'Buenos Aires'
}


const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonimous'} </h1>
        {(user.age && user.age >= 18) && <p> Age: {user.age} </p>}
        {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);