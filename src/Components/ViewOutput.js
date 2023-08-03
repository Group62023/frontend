import React, { Component } from "react";
import axios from "axios";
const customStyle = {
  width: "10000px",
  margin: "100",
  color: "black",
  label: "center",
};

class ViewOutput extends Component {
  constructor(props) {
    super(props);
    this.state = { cases: [] };
  }

  // To view cases reported
  handlePull = (event) => {
    let configoptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };
    //event.preventDefault();
    // const { mobileno, fraudtype, comment } = this.state;
    axios
      .get("http://localhost:3001/fraudcases", {}, configoptions)
      .then((response) => {
        this.setState({ cases: response.data });
        console.log(response);
        //alert(response);
        // this.props.history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };
  componentDidMount() {
    this.handlePull();
  }
  render() {
    var returncases = this.state.cases;
    return (
      <div className="container">
        <h1>VIEW REPORTED CASES</h1>
        <table>
          {returncases.map((mycase) => (
            <tr>
              <td>{mycase.id}</td>
              <td>{mycase.mobileno}</td>
              <td>{mycase.fraudtype}</td>
              <td>{mycase.progress}</td>
              <td>{mycase.comment}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default ViewOutput;
