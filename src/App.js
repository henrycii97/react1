/*import logo from './logo.svg';*/
import './App.css';
import AddUser from './component/AddUser';
import Header from './component/Header';
import Search from './component/Search';
import TableData from './component/TableData';


import React, { Component } from 'react'
import DataUser from './component/Data.json';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm : false,
      data : [],
      searchText: '',
      editUserStatus: false,
      userEditObject:{}
     
    }
    
  }
  // componentWillMount() {
  //  if(localStorage.getItem('userData') === null){
  //    localStorage.setItem('userData', DataUser);
  //  }
  //  else{
  //    var temp = localStorage.getItem('userData');
  //    this.setState({
  //      data: temp
  //    })
  //  }
  // }
  deleteUser = (idUser)=>{
    var tempData = this.state.data.filter(item => item.id !== idUser );
    this.setState({
      data:tempData
    })
    localStorage.setItem('userData1',JSON.stringify(tempData));
  }
  changeEditUserStatus  = () =>{
     this.setState ({
       editUserStatus : !this.state.editUserStatus
     })
  }
  editUser  = (user) =>{
    console.log('da ket noi');
    this.setState({
      userEditObject: user

    })
    console.log(user);
  }
  displayChange = ()=>{
    this.setState({
      displayForm : !this.state.displayForm
    })
  }
  getTextSearch = (dl) => {
    this.setState ({searchText:dl})
    
  }
  getNewUserData  = (name , phone ,permission) =>{
    console.log('ket noi ok ok');
    var item ={};
    item.id = uuidv4();
    item.name = name;
    item.phone = phone;
    item.permission = permission;
    var items = this.state.data;
   
    items.push(item);
    this.setState({
      data:items
    })
    localStorage.setItem('userData1',JSON.stringify(items));

  }
  getUserEditInfoApp =(info)=>{
    
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id) {
        value.name = info.name;
        value.phone = info.phone;
        value.permission = info.permission;
      }
    })
    localStorage.setItem('userData1',JSON.stringify(this.state.data));

  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.

  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
   
    if(localStorage.getItem('userData1')===null){
      localStorage.setItem('userData1',JSON.stringify(DataUser));
    }
    else {
      var temp = JSON.parse(localStorage.getItem('userData1'));
      this.setState({
        data:temp
      });
    }
  }
  render() {
   localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua =[];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
   
    return (
   
      <div className="Appreact">
      <Header/>
     
      <div className="searchForm">
      <div className="container">
      <div className="row">
      <Search getUserEditInfoApp ={(info)=>this.getUserEditInfoApp(info)} userEditObject={this.state.userEditObject} changeEditUserStatus = {()=> this.changeEditUserStatus()} editUserStatus ={this.state.editUserStatus} checkConnect = {(dl) =>  this.getTextSearch(dl)} Conection={()=> this.displayChange()} displayForm={this.state.displayForm}/>
      {/* <TableData  dataUser ={this.state.data}/>lv 1  */}
      <TableData  deleteUser ={(idUser)=> this.deleteUser(idUser)} changeEditUserStatus = {()=> this.changeEditUserStatus()} editFun = {(user)=> this.editUser(user)} dataUser ={ketqua}/>
      <AddUser add = { (name,phone,permission) => this.getNewUserData(name,phone,permission)} displayForm={this.state.displayForm}/>
      </div>
      </div>
      </div>
   </div>
    );
  }
}
export default App;
