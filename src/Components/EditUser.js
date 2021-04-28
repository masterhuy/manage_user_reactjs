import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            age : this.props.userEditObject.age,
            nationality : this.props.userEditObject.nationality
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.age = this.state.age;
        info.nationality = this.state.nationality;

        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-12 user-manage mb-5">
                <form>
                    <div className="card text-white bg-secondary mt-2">
                        <div className="card-body">
                            <h4 className="card-title">Edit Player</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="name" defaultValue={this.props.userEditObject.name} className="form-control"  placeholder="name" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="age" defaultValue={this.props.userEditObject.age} className="form-control"  placeholder="Age" />
                            </div>
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} type="text" name="nationality" defaultValue={this.props.userEditObject.nationality} className="form-control"  placeholder="nationality" />
                            </div>
                            <div className="form-group">
                                <input type="button" value="Save" onClick={() => this.saveButton()} className="btn btn-block btn-danger"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;