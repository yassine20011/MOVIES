import React, { Component } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.publicapis.org/",
});

class Apis extends Component {
  state = {
    data: [],
  };

  constructor() {
    super();
    api.get("entries").then((response) => {
      this.setState({ data: response.data.entries });
    });
  }

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>API by category</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">API</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((movie, id) => (
                    <tr key={id}>
                      <td >{movie.API}</td>
                      <td >{movie.Category}</td>
                      <td >{movie.Description}</td>
                      <td >
                        <a href={movie.Link}>Click here</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Apis;
