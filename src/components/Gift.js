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
                <Button 
                    className='btn-remove'
                    onClick={() => this.props.removeGift(this.props.gift.id)}>
                    Remove Gift
                </Button>
            </div>
        );
    }
}

export default Gift;