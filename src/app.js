
class IndecisionApp extends React.Component {
    render() {
        const title = `Indecision`;
        const subtitle = `Put your life in the hands of a computer`;
        const options = ['One option', 'Two options', 'Three options'];


        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert('handlePick');
    }


    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}



class Options extends React.Component {
    constructor(props) {
        super(props);
        //whenever we call the handler, we assure that this value is binded correctly
        this.handleRemoveAll = this.handleRemoveAll.bind(this) ;
    }

    handleRemoveAll() {
        console.log(this.props.options);
        //alert('handleRemoveAll');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}> Remove all</button>
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
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();

        if (option) {
            alert(`handleAddOption: ${option}`);

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