import { Modal, Button, ButtonToolbar} from 'rsuite';
import * as React from "react";
import ToDoForm from './ToDoForm'
import useUser from "../_hooks/useUser";

export default class ToDoModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show: false
      };
      this.close = this.close.bind(this);
      this.open = this.open.bind(this);
    }
    close() {
      this.setState({ show: false });
    }
    open() {
      this.setState({ show: true });
    }
    render() {
      // console.log(this.props.id)
      return (
        <div className="modal-container">
          <ButtonToolbar>
            <Button color="green" onClick={this.open}> Add Assignment</Button>
          </ButtonToolbar>
  
          <Modal show={this.state.show} onHide={this.close}>
            <Modal.Header>
              <Modal.Title>Add Assignment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ToDoForm id={this.props.id} close={this.close}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.close} color="green" appearance="primary">
                Close
              </Button >
              {/* <Button onClick={this.close} appearance="subtle">
                Cancel
              </Button> */}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
