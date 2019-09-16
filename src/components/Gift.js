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
                        <label>Person</label>
                        <FormControl 
                        onChange={event => this.setState({person: event.target.value})}
                        className="input-person"/>
                    </FormGroup>
                    <FormGroup>
                       <label>Present</label>
                       <FormControl 
                        className="input-present"
                        onChange={event => this.setState({present: event.target.value})}/>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Gift;