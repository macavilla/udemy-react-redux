
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        //binding functions to this particular instance
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: ['First option', 'Second option', 'Third option']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        this.setState(() => {
            const randomNum = Math.floor((Math.random() * this.state.options.length) + 0);
            const chosenOption = this.state.options[randomNum];
            return alert(chosenOption);

        })
    }

    handleAddOption(option) {
        this.setState((prevState) => {
return console.log('test');

        });
    }
    render() {
        const title = `Indecision`;
        const subtitle = `Put your life in the hands of a computer`;


        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {// method, it returns some JSX
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    }
}

class Action extends React.Component {


    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}



class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}> Remove all</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            this.props.handleAddOption(option);

        }

        e.target.elements.option.value = '';

    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="Add an option" />
                    <button>Add option</button>
                </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));