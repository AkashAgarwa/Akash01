import React, { Component } from "react";

export class Table extends Component {
  render() {
    let { data } = this.props;
    return (
      <div >
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.firstName}</td>
                  <td>{el.lastName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
