import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Person extends Component {

  constructor(props) {
    super(props);
  }

  //to prototype the table
  genericRenderList(obj) {
    var renderedList = [];
    for (var prop in obj) {
      var type = typeof obj[prop];
      if (obj.hasOwnProperty(prop)
        && type !== "function"
        && type !== "array"
        && type != "object") {
        var val = (<td> {obj[prop]} </td>);
        renderedList.push(val)
      }
    }
    return renderedList;
  }

  dateFormat(date) {
    return moment(date).format('d MMM yyy')
  }

  render() {
    if (this.props.person) {
      var obj = this.props.person
      // return <tr>{this.genericRenderList(obj)}</tr>;

      return (
        <tr>
          <td>{obj.name}</td>
          <td>{obj.height}</td>
          <td>{obj.mass}</td>
          <td>{this.dateFormat(obj.created)}</td>
          <td>{this.dateFormat(obj.edited)}</td>
          <td><a>{obj.homeworld}</a></td>
        </tr>
      )
    } else {
      return (
        <tr><td>Empty</td></tr>
      )
    }
  }

}

export default Person;
