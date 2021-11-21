import React, { Component } from 'react'
import Item from './Item';


export default class TableData extends Component {
  deleteButtonClick = (idUser) => {this.props.deleteUser(idUser)}
  mappingDataUser =()=> this.props.dataUser.map((value,key)=>(
    <Item  deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)} idUser={value.id} changeEditUserStatus = {()=> this.props.changeEditUserStatus()} editFunClick={(user)=>this.props.editFun(value)} name={value.name} stt ={key} phone={value.phone} permission={value.permission} key={key}/>
  ))
    render() {
      
        return (
          
            <div className="col-9 mt-3">
            
            <table className="table table-striped table-hover">
              <thead className="thead-inverse">
            
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
             
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
        )
    }
}
