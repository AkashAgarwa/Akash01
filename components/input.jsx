import React, { Component } from "react";

export class InputInitial extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };
    this.changeFirstName = this.handleFirstName.bind(this);
    this.changeLastName = this.handleLastName.bind(this);
  }
  handleFirstName(e) {
    this.setState({ firstName: e.target.value });
  }
  handleLastName(e) {
    this.setState({ lastName: e.target.value });
  }
  render() {
    let { handleAdd } = this.props;
    return (
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Enter First Name"
          value={this.state.firstName}
          onChange={this.changeFirstName}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          value={this.state.lastName}
          onChange={this.changeLastName}
        />
        <button className="btn btn-outline-primary"
          onClick={() => {
            handleAdd(this.state.firstName, this.state.lastName);
            this.setState({ firstName: "", lastName: "" });
          }}
          disabled={this.state.firstName==="" || this.state.lastName==="" ? true : false}
        >
          Add
        </button>
      </div>
    );
  }
}

export default InputInitial;
