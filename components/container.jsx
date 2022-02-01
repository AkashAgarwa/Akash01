import React, { Component } from "react";
import InputInitial from "./input";
import Table from "./Table";
import InputIterable from "./InputIterable";

export class InputContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], counter: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleAdd(firstName, lastName) {
    let { data, counter } = this.state;
    data.push({ id: counter, firstName: firstName, lastName: lastName });
    counter = counter + 1;
    this.setState({ data: data, counter: counter });
  }
  handleEdit(firstName, lastName, id) {
    let {data} = this.state;
    let copyData = data;
    copyData.map ((el) => {
        if (el.id == id) {
            el.firstName = firstName;
            el.lastName = lastName;
        }
    })
    this.setState({ data: copyData });
  }
  handleRemove(id) {
    console.log(id)
    let {data} = this.state;
    let copyData = data.filter((item) => item.id !== id);
    this.setState({ data: copyData });
    
  }

  render() {
    return (
      <div className="Input-container">
        {this.state.data.map((element,index) => {
          return (
            <InputIterable
              key={element.id}
              id={element.id}
              index={index}
              firstName={element.firstName}
              lastName={element.lastName}
              handleEdit={this.handleEdit}
              handleRemove={this.handleRemove}
            />
          );
        })}
        <InputInitial handleAdd={this.handleAdd} />
        <Table data={this.state.data} />
      </div>
    );
  }
}

export default InputContainer;
