import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj : {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoApp(info);
    }
    
    isShowEditForm  = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
                        getUserEditInfo = {(info) => this.getUserEditInfo(info)}
                        userEditObject = {this.props.userEditObject}
                        changeEditUserStatus={() => this.props.changeEditUserStatus()}
                    />
        }
    }

    isChange = (event) => {
        // this.setState({
        //     tempValue: event.target.value
        // });
        this.props.checkConnectProps(event.target.value)
    }

    hienThiNut= () => {
        if(this.props.hienThiForm === true){
            return <div className="col-2 btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Close add form</div>
        }
        else{
            return <div className="col-2 btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Add new player</div>
        }
    }

    render() {
        return (
            <div className="searchForm">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {this.isShowEditForm()}
                            </div>
                            <div className="form-group">
                                <div className="btn-group mb-3">
                                    <input type="text" className="form-control" placeholder="Search by name" onChange={(event) => this.isChange(event)}/>
                                </div>
                                {this.hienThiNut()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;