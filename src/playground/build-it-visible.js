
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state={
            visibility: ''
        }

    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !this.prevState
            }
        })

    }
    
    render(){
        return(
            <div>
                <h1>Toggle visibility</h1>
                <button onClick={this.handleToggleVisibility}> {} details </button>
                <p></p>
            </div>

        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');
// const app = {
//     title: 'Visibility toggle',
//     details: 'Here are some details...',
//     detailsAreShowed: ''
// };

// const toggleVisibility = () => {
//     app.detailsAreShowed = !app.detailsAreShowed;
//     render();

// };

// const showDetails = () => {
//     if (app.detailsAreShowed) {
//         return app.details;
//     } else {
//         return ' ';
//     }
// render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1> {app.title} </h1>
//             <button onClick={toggleVisibility}> {app.detailsAreShowed ? 'Hide' : 'Show'} details </button>
//             <p> {showDetails()} </p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();