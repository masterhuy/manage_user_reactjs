import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortAZ: false
        }
      }

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    
    mappingDataUser = () => {
        var a = this.props.dataUserProps;
        
        return a.map((value, key) => (
            <TableDataRow
                deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
                changeEditUserStatus = {() => this.props.changeEditUserStatus()}
                editFunClick={(user) => this.props.editFun(value)} 
                userName={value.name} 
                key={key} 
                stt={key} 
                age={value.age} 
                nationality={value.nationality}
                id={value.id}
            />
        ))
    }
    
    render() {
        return (
            
            <div className="col data-table">
                <table id="myTable" className="table table-hover">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            Name
                            <span onClick={() => this.props.sortNameAZ()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span>
                            <span onClick={() => this.props.sortNameZA()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15" /></svg></span>
                        </th>
                        <th>
                            Age
                            <span onClick={() => this.props.sortAgeAZ()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg></span>
                            <span onClick={() => this.props.sortAgeZA()}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15" /></svg></span>
                        </th>
                        <th>Nationality</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {this.mappingDataUser()}
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;