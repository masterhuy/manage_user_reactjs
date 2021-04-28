import React, { Component } from 'react';

class TableDataRow extends Component {

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)
    }

    render() {
        return ( 
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.age}</td>
                <td>
                    {this.props.nationality}
                </td>
                <td>
                <div className="btn-group">
                    <button onClick={() => this.editClick()} type="button" className="btn btn-primary">
                        <i className="fa fa-edit" />
                    </button>
                    <button type="button" className="btn btn-danger" onClick = {(idUser) => this.deleteButtonClick(this.props.id)}>
                        <i className="fa fa-trash" />
                    </button>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;