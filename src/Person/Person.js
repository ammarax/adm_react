import React, { Component } from 'react';
import moment from 'moment';
import Planet from '../Planet/Planet';

class Person extends Component {

  show = false;

  //to prototype the table
  genericRenderList(obj) {
    var renderedList = [];
    for (var prop in obj) {
      var type = typeof obj[prop];
      if (obj.hasOwnProperty(prop)
        && type !== "function"
        && type !== "array"
        && type !== "object") {
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
        <tr key={obj.id}>
          <td>{obj.name}</td>
          <td>{obj.height}</td>
          <td>{obj.mass}</td>
          <td>{this.dateFormat(obj.created)}</td>
          <td>{this.dateFormat(obj.edited)}</td>
          <td>
            <Planet show={this.show} url={obj.homeworld}></Planet>
          </td>
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
