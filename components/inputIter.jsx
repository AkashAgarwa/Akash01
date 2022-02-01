import React, { Component } from 'react';
class inputIterable extends Component {
    constructor(props) {
        super(props);
    
    }
    state={firstName:this.props.firstName,lastName:this.props.lastName}
    render() { 
        let {handleRemove}=this.props.handleRemove;
        let {handleEdit}=this.props.handleEdit;
        return ( 
            <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Enter First Name"
              value={this.state.fName}
              onChange={this.changeFName}
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              value={this.state.lName}
              onChange={this.changeLName}
            />
            <button className="btn btn-outline-danger" onClick={() => {
                handleRemove(this.state.id);
              }}>Remove</button>
            <button className="btn btn-outline-warning"
              onClick={() => {
                handleEdit(this.state.fName, this.state.lName, this.state.id);
              }}
            >
              Edit
            </button>
          </div>
         );
    }
}
 
export default inputIterable;