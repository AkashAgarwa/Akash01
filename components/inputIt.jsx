import React, { Component } from 'react';
class InputContainer extends Component {
    constructor(props) {
        super(props);
       this.state = { firstName="" , lastName=""};
    this.changeFirstName=this.changeFirstName.bind(this);
    this.changeLastName=this.changeLastName.bind(this);
        }
    changeFirstName = (e) => this.setState({firstName=e.targer.value})
    
    changeLastName = (e) => this.setState({lastName=e.target.value})
   
    render() { 
        let {handleAdd}=this.props;
        return ( 
            <div class="input-group">
  <input type="text"  class="form-control" value={this.firstName} onchange={changeFirstName}/>
  <input type="text"  class="form-control" value={this.lastName} onchange={changeLastName} />
  <button type="button" class="btn btn-primary" onClick ={ () =>{ handleAdd(this.firstName,this.lastName) ;this.setState({firstName='',lastName=''})}}> Add</button>
</div>
         );
    }
}
 
export default InputContainer;