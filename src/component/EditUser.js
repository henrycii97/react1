import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            phone : this.props.userEditObject.phone,
            permission : this.props.userEditObject.permission
        }
    }
    
    isChange  = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    saveButton =()=>{
        var info ={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus() ; //an form

    }
    render() {
       
        return (
            <div className="row">
              <div className="card text-white bg-warning  mb-12">
            <div className="card-header text-center">Thêm mới user vào hệ thống</div>
            <div className="card-body">
              <label >Tên user</label>
              <input onChange={(event)=> this.isChange(event)} defaultValue ={this.props.userEditObject.name} type="text" placeholder="username"  name="name"  className="form-control" /> <br />
              <label>Số điện thoại</label>
              <input type="text" onChange={(event)=> this.isChange(event)} defaultValue ={this.props.userEditObject.phone} placeholder="Phone" name="phone"   className="form-control" /> <br />
              <div className="form-group">
                <select onChange={(event)=> this.isChange(event)} defaultValue ={this.props.userEditObject.permission} className="form-control" name="permission" >
                  <option value>Quyền mặc định</option>
                  <option value={1}> Admin</option>
                  <option value={2}> Modrator</option>
                  <option value={3}> Normal</option>
                </select>
              </div>
              <input type="button"  className="btn btn-danger btn-block " value="lưu" onClick={ ()=> this.saveButton() }/> 
            </div>
            </div>
              </div>
        )
    }
}
