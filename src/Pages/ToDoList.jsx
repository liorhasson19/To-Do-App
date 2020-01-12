import React, { Component } from 'react'
import { Container, Jumbotron, Row } from 'react-bootstrap'

export default class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };
    }

    onChangeHandler = (ev) => {
        this.setState({ input: ev.target.value });
        console.log("this.state.input: " + this.state.input)
    }

    render() {
        const { input } = this.state;

        return (
            <div>
                <Jumbotron>
                    <h1>ToDos</h1>
                </Jumbotron>
                <Container>
                    <Row>
                        <input className="filter-input" type="text" id="myInput" value={input}
                            placeholder="What's next?" onChange={this.onChangeHandler} />
                    </Row>
                    <Row>
                        <div className="myInput">{this.state.input}</div>
                    </Row>
                </Container>
            </div>
        )
    }
}

