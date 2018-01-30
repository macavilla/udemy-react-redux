
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state={
            visibility: '',
            details: 'Here are some details'
        }

    }

    handleToggleVisibility(){
        this.setState((prevState) => {
            
            return {
                visibility: !prevState.visibility
            }
        })

    }
    
    render(){
        return(
            <div>
                <h1>Toggle visibility</h1>
                <button onClick={this.handleToggleVisibility}> {this.state.visibility ? 'Hide' : 'Show' } details </button>
                <p>{this.state.visibility ? this.state.details : ' '}</p>
            </div>

        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

