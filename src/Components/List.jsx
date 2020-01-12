import React, { Component } from 'react'
// import { Form } from 'react-bootstrap'

export default class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            list: []
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addTask = this.addTask.bind(this);

    }

    onChangeHandler = (ev) => {
        const lowerC = ev.target.value.toLowerCase();
        const upperC = lowerC.charAt(0).toUpperCase() + lowerC.substring(1);
        this.setState({ input: upperC });
        // console.log("this.state.input: " + upperC)

    }

    addTask(event) {
        const { input } = this.state
        console.log(input)
        if (event.keyCode === 13) {
            event.preventDefault();
            this.setState({
                list: this.state.list.concat(input),
                input: ""
            });
            console.log(this.state.list)
        }
    }

    myFunction() {
        // Get the checkbox
        const checkBox = document.getElementById("myCheck");
        // Get the output text
        var text = document.getElementById("text");

        // If the checkbox is checked, display the output text
        if (checkBox.checked === true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }

    render() {
        const { input, list } = this.state;

        const listItems = list.map((item) =>
            <li key={"item-" + item} value={item}><input type="checkbox" id="myCheck" onClick="myFunction()">
            </input>{item}<button className="btn">x</button></li>
        );
        console.log(listItems);

        return (
            <div>
                < input className="filter-input" type="text" id="myInput" value={input}
                    placeholder="What's next?" onChange={this.onChangeHandler} onKeyUp={this.addTask} />
                < ul className="myUL">
                    {listItems}
                </ul >
            </div >
        )
    }
}
