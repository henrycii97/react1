import React, { Component } from 'react'

export default class Item extends Component {
    permissionShow =()=>{
        if(parseInt(this.props.permission) === 1){ return "Admin"}
        else if(parseInt(this.props.permission) === 2){ return "Moderator"}
        else { return "Normal"}
      }
      deleteButtonClick =(idUser)=>{
        this.props.deleteButtonClick(idUser)
      }
    editClick = () =>{
        this.props.editFunClick()
        this.props.changeEditUserStatus()
    };
    render() {
        
        return (
            <tr>
                 
                  <td>{this.props.stt+1}</td>
                  <td>{this.props.name}</td>
                  <td>{this.props.phone}</td>
                  <td>{this.permissionShow()}</td>
                  
                   
                  <td>
                  <div className="bnt-group">
                      <div className="btn btn-warning" onClick={(idUser)=>this.editClick(idUser)}><i className="fa fa-edit" /></div>
                      <div className="btn btn-danger" onClick ={(idUser)=> this.deleteButtonClick(this.props.idUser)}><ion-icon name="close-outline" ></ion-icon></div>
                    </div>
                </td>
                </tr>
        )
    }
}
