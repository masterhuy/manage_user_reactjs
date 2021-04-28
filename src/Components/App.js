import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import FilterAgeRow from './FilterAgeRow';
import DataUser from './Data';

const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data: [],
      dataFull: [],
      searchText:'',
      editUserStatus: false,
      userEditObject:{},
      ageFilter: '',
      activeFilter: false
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var tem = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:tem
      });
    }
    var tem2 = JSON.parse(localStorage.getItem('userData'));
    this.setState({
      dataFull: tem2
    });
  }
  

  deleteUser = (idUser) => {
    var tempData = this.state.data;

    tempData = tempData.filter(item => item.id !== idUser)
    this.setState({
      data:tempData
    });
    localStorage.setItem('userData',JSON.stringify(tempData));
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.age = info.age;
          value.nationality = info.nationality;
        }
    });
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject:user
    });
  }

  getNewUserData = (name, age, nationality) => {
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.age = age;
    item.nationality = nationality;

    var items = this.state.data;
   
    items.push(item);

    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }

  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  sortNameAZ = () => {
    var data = this.state.data;
    var dataSort = data.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      data: dataSort
    });
  }

  sortNameZA = () => {
    var data = this.state.data;
    var dataSort = data.sort((a, b) => (a.name > b.name) ? -1 : 1)
    this.setState({
      data: dataSort
    });
  }

  sortAgeAZ = () => {
    var data = this.state.data;
    var dataSort = data.sort((a, b) => (a.age > b.age) ? 1 : -1)
    this.setState({
      data: dataSort
    });
  }

  sortAgeZA = () => {
    var data = this.state.data;
    var dataSort = data.sort((a, b) => (a.age > b.age) ? -1 : 1)
    this.setState({
      data: dataSort
    });
  }

  filterAge = (age) => {
    var data = this.state.dataFull;
    var dataFilter = data.filter((x) => x.age == age)
    this.setState({
      data: dataFilter
    });
  }

  clearFilter = () => {
    var data = this.state.dataFull;
    this.setState({
      data: data
    });
  }


  showFilterAge = () => {
    var data = this.state.dataFull;
    var ageArr = data.map(x => x.age);
    var ageArrNotRepeat = Array.from(new Set(ageArr)); //es 6 unique
    
    return ageArrNotRepeat.sort((a,b) => a - b).map((value, key) => (
      <FilterAgeRow
          filterAge = {(age) => this.filterAge(age)}
          activeFilter = {this.state.activeFilter}
          key={key} 
          stt={key} 
          age={value} 
      />
  ))
  }
  
  render() {
    // localStorage.setItem('userData',JSON.stringify(DataUser));
    var ketqua = [];
    this.state.data.forEach((item) => {
        if(item.name.toLowerCase().indexOf(this.state.searchText) !== -1){
          ketqua.push(item);
        }
    })
    // console.log(ketqua);
    return (
      <div>
        <Header/>
        <Search 
          getUserEditInfoApp ={(info) => this.getUserEditInfoApp(info)}
          userEditObject={this.state.userEditObject}
          checkConnectProps={(dl) => this.getTextSearch(dl)} 
          ketNoi={() => this.doiTrangThai()} 
          hienThiForm={this.state.hienThiForm}
          editUserStatus={this.state.editUserStatus}
          changeEditUserStatus = {() => this.changeEditUserStatus()}
        />
        <div className="content">
            
            <div className="container">
              <ul id="filter-age">Filter age: {this.showFilterAge()}</ul>
              <button onClick={() => this.clearFilter()}>Clear filter</button>
                <div className="row">
                  
                  <TableData 
                    deleteUser ={(idUser) => this.deleteUser(idUser)}
                    changeEditUserStatus = {() => this.changeEditUserStatus()}
                    editFun={(user) => this.editUser(user)} 
                    dataUserProps={ketqua}
                    sortNameAZ = {() => this.sortNameAZ()}
                    sortNameZA = {() => this.sortNameZA()}
                    sortAgeAZ = {() => this.sortAgeAZ()}
                    sortAgeZA = {() => this.sortAgeZA()}
                  />
                  <AddUser add={(name,age,nationality) => this.getNewUserData(name,age,nationality)} hienThiForm={this.state.hienThiForm}/>
                </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
