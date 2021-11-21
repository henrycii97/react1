import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id : "",
      name:"",
      phone : "",
      permissions : "",
    }
  }
  
  isChange  = (event) =>{
    const name = event.target.name;
    const value = event.target.value;
    console.log(name);
    console.log(value);
    this.setState({
      [name]:value
    })
    // var item ={};
    // item.id = this.state.id;
    // item.name = this.state.name;
    // item.phone = this.state.phone;
    // item.permissions = this.state.permissions;
    // console.log(item);
  }
    displayCheck = ()=>{
        if(this.props.displayForm === true ){
            return (
               <form>
                <div className="card text-white  mb-3">
              <div className="card-header bg-dark">Thêm mới user vào hệ thống</div>
              <div className="card-body">
                <label  className="text-dark"  >Tên user</label>
                <input type="text" placeholder="username" onChange={(event)=>this.isChange(event)} name="name"  className="form-control" /> <br />
                <label className="text-dark"  >Số điện thoại</label>
                <input type="text" placeholder="Phone" name="phone" onChange={(event)=>this.isChange(event)}  className="form-control" /> <br />
                <div className="form-group">
                  <select className="form-control" name="permission" onChange={(event)=>this.isChange(event)}>
                    <option value>Quyền mặc định</option>
                    <option value={1}> Admin</option>
                    <option value={2}> Modrator</option>
                    <option value={3}> Normal</option>
                  </select>
                </div>
                <input type="reset" onClick={(name,phone,permission)=>this.props.add(this.state.name,this.state.phone,this.state.permission)} value="Thêm mới" className="btn btn-info btn-block"/> 
              </div>
            </div>
            </form>
            )
        }
    }
   
    
    render() {
     
        return (
             
          <div className="col-3">
              <div>
               {this.displayCheck()}
               </div>
               </div>
            
         
        )
    }
}
