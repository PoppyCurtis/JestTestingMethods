import React, {Component} from 'react';
import { Form, FormGroup, ControlLabel, Button, FormControl } from 'react-bootstrap';

class Gift extends Component {

    constructor () {
        super ();
        this.state = {
            person: '',
            present: ''
        }
    }
    render () {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                        onChange={event => this.setState({person: event.target.value})}
                        className="input-person"/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Gift;