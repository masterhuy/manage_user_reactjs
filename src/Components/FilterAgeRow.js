import React, { Component } from 'react';


class FilterAgeRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        }
    }

    clickAge = (e) =>{
        return this.props.filterAge(this.props.age);
    }


    render() {
        return (
            <li onClick = {(e) => this.clickAge(e)}>{this.props.age}</li>
        );
    }
}

export default FilterAgeRow;