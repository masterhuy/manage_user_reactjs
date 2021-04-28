import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            age:"",
            nationality:""
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]:value
        });
        //pakage to item
        // var item = {};
        // item.id = this.state.id;
        // item.name = this.state.name;
        // item.tel = this.state.tel;
        // item.permission = this.state.permission;
        // console.log(item);
    } 

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true){
            return (
                <div className="col user-manage">
                    <form>
                        <div className="card mt-2">
                            <div className="card-body">
                                <h4 className="card-title">Add new player</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="name" className="form-control"  placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="age" className="form-control"  placeholder="Age" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} type="text" name="nationality" className="form-control"  placeholder="Nationality" />
                                </div>
                                <div className="form-group">
                                    <input type="reset" value="Add" className="btn btn-block btn-primary" onClick={(name, age, nationality) => this.props.add(this.state.name, this.state.age, this.state.nationality)} />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.kiemTraTrangThai()
                }                
            </div>
        );
    }
}

export default AddUser;