import React, { Component } from "react";
import axios from "axios";
const customStyle = {
  width: "10000px",
  margin: "500",
  color: "black",
  label: "center",
};

class ReportCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileno: "",
      fraudtype: "",
      comment: "",
    };
  }

  // When value changes of the fields
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To add new ReportCase when user submits the form
  handleSubmit = (event) => {
    let configoptions = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Content-Type": "application/json",
    };
    event.preventDefault();
    const { mobileno, fraudtype, comment } = this.state;
    axios
      .post(
        "http://localhost:3001/fraudcases",
        {
          mobileno: mobileno,
          fraudtype: fraudtype,
          comment: comment,
        },
        configoptions
      )
      .then((response) => {
        //console.log(response);
        alert(response.data.caselist);
        window.location = "/ViewOutput";

        // alert(response);
        // this.props.history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <h2>CAPTURE BELOW DETAILS TO REPORT </h2>
          <hr />
          <label>
            Mobile Number Affected
            <input
              name="mobileno"
              type="text"
              value={this.state.mobileno}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />

          <label>
            Type Fraud
            <input
              name="fraudtype"
              type="text"
              value={this.state.fraudtype}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Comment
            <input
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <hr />
          <br />
          <input type="submit" value="SUBMIT" className="btn btn-primary" />
        </form>
        <br />
      </div>
    );
  }
}
export default ReportCase;
