let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const setupReset = () => {
    count = 0;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count} </h1>
            <button onClick={minusOne} > -1 </button>
            <button onClick={setupReset} > Reset </button>
            <button onClick={addOne} > +1 </button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();