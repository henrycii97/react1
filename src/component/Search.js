import React, { Component } from 'react'
import EditUser from './EditUser';

export default class Search extends Component {
  constructor(props, contex) {
    super(props);
    this.state ={
      tempValue :'',
      userObj:{}
    }
    
  }
  getUserEditInfo  = (info) =>{
    this.setState({
      userObj : info
    })
    this.props.getUserEditInfoApp(info);
  }
  isShowEditForm  = () =>{
    if(this.props.editUserStatus === true){
      return <EditUser  getUserEditInfo ={(info)=> this.getUserEditInfo(info) } userEditObject={this.props.userEditObject} 
      changeEditUserStatus ={()=> this.props.changeEditUserStatus()}/>
    }
  }
  isChange = (event)=> {
    console.log(event.target.value)
    this.setState({
    tempValue: event.target.value
    });
    this.props.checkConnect(this.state.tempValue);
  }
  displayButton = () => {
    if(this.props.displayForm === false ){
      return <div className="btn btn-info btn-block" onClick={()=> this.props.Conection()}> Thêm mới</div>
    }
    else {
      return  <div className="btn btn-success btn-block" onClick={()=> this.props.Conection()}> Đóng lại</div>
    }
  
  }
    render() {
     
        return (
            <div className="col-9">
             {this.isShowEditForm()}
            <div className="btn-group btn-block">
              <input type="text" className="form-control " placeholder="Nhập từ khóa" onChange={(event)=> this.isChange(event)}/>
              <div className="btn btn-info btn-block col-2" onClick={(dl)=>this.props.checkConnect(this.state.tempValue)}>
                Tìm kiếm
              </div> 
            </div>
            
           {this.displayButton()}
          </div>
        )
    }
}
