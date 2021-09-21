import React, { Component } from 'react';
import Person from '../Person/Person';


class People extends Component {

  constructor(props) {
    super(props);
    this.state = { search: "", filtered: [] }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    var src = event.target.value;
    console.log("src " + src);
    var list = this.props.value;
    if (this.props.value && src) {
      list = this.props.value.filter((x) => {
        console.log(src)
        return x.name.toUpperCase().startsWith(src.toUpperCase())
      })
      console.log(list)
      if (list.length == 0) {
        list = [];
      }
    }
    this.setState({ search: src, filtered: list });
  }

  list() {
    var list = this.state.filtered.length > 0 ? this.state.filtered : this.props.value
    if (list && list.length > 0) {
      return (
        list.map(function (obj, i) {
          return (
            <Person person={obj} key={obj.id}></Person>
          )
        })
      )
    } else {
      <tr><td colSpan="5">Empty List</td></tr>
    }
  }

  render() {
    return (
      <div>
        <div className="container row">
          <form className="col-sm-12 col-md-6 col-lg-12">
            <div className="form-group row">
              <label className="col-form-label col-sm-2">Search</label>
              <div className="col-sm-6 col-md-6 col-lg-4">
                <input type="text" className="form-control" onChange={this.handleChange}></input>
              </div>
              <div className={`alert alert-warning alert-dismissible fade 
                ${this.state.search && this.state.filtered.length == 0 ? "show" : ""}`}
                role="alert">
                No results
              </div>
            </div>
          </form>
        </div>
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
            {this.list()}
          </tbody>
        </table>
      </div>
    )
  }
}
export default People