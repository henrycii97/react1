import React, { Component } from 'react'

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            Display: false
        }
        
    }
    changeDislay = () => {
        console.log('da click');
        this.setState ({
              Display : !this.state.Display
        });
    }
    displayButton = () =>{
        if(this.state.Display === true){
            return <div className="btn btn-outline-secondary btn-block" onClick={ ()=> this.changeDislay() }>Đóng lại</div>
        }
        else if(this.state.Display === false) {
            return  <div className="btn btn-outline-info btn-block"  onClick={ ()=> this.changeDislay() }> Thêm mới</div>
        }
    }
    displayForm = () => {
        if(this.state.Display === true){
            return ( <div className="card text-white  mb-3">
            <div className="card-header bg-dark">Thêm mới user vào hệ thống</div>
            <div className="card-body">
              <label >Tên user</label>
              <input type="text" placeholder="username" className="form-control" /> <br />
              <label>Số điện thoại</label>
              <input type="text" placeholder="Phone" className="form-control" /> <br />
              <div className="form-group">
                <select className="form-control" >
                  <option value>Quyền mặc định</option>
                  <option value={1}> Admin</option>
                  <option value={2}> Modrator</option>
                  <option value={3}> Normal</option>
                </select>
              </div>
              <button className="btn btn-info btn-block"> Thêm mới</button>
            </div>
          </div> );
        }
    }
    render() {
        return (
             
            <div className="col-3">
                {this.displayButton()}
                {this.displayForm()}
            
          </div>
        )
    }
}
