import React, { Component } from 'react'
import { Container, Jumbotron } from 'react-bootstrap'
import List from '../Components/List'

export default class ToDoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {

        return (
            <div>
                <Jumbotron>
                    <h1>ToDos</h1>
                </Jumbotron>
                <Container>
                    <List/>
                </Container>
            </div>
                )
            }
        }
        
