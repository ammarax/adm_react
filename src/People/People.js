import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from '../Person/Person';


class People extends Component {

  constructor(props) {
    super(props);
  }

  list() {
    if (this.props.value) {
      return (
        <table>
          <caption>People List</caption>
          <thead>
            <tr>
              <th scope="col">name</th>
              <th scope="col">height</th>
              <th scope="col">mass</th>
              <th scope="col">created</th>
              <th scope="col">edited</th>
              <th scope="col">planet</th>
            </tr>
          </thead>
          <tbody>
          {this.props.value.map(function (obj, i) {
            return (
              <Person person={obj}></Person>
            )
          })}
          </tbody>
        </table>
      )

    } else {
      return (
        <h2>Empty list</h2>
      )
    }
  }

  render() {
    return (
      <div>
        People List

        {this.list()}
      </div>
    )
  }
}
export default People