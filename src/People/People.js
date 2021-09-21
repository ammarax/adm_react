import React, { Component } from 'react';
import Person from '../Person/Person';


class People extends Component {

  list() {
    if (this.props.value) {
      return (
        <>
          <table className="table">
            <thead className="text-capitalize">
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
                  <Person person={obj} key={obj.id}></Person>
                )
              })}
            </tbody>
          </table>
        </>
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
        {this.list()}
      </div>
    )
  }
}
export default People