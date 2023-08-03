import React, { Component } from "react";
import axios from "axios";

const customStyle = {
  width: "300px",
  margin: "0 auto",
};

class UpdateProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      simSwap: "",
      mpesaFraud: "",
      kcbMpesa: "",
      hustlerFund: "",
    };
  }

  componentDidMount = () => {
    this.getUpdateProgress();
  };

  // To get UpdateProgress based on ID
  getUpdateProgressById() {
    axios
      .get(
        "http://localhost:3000/caseList/editcaseList/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          mobileNo: response.data.mobileNo,
          simSwap: response.data.simSwap,
          mpesaFraud: response.data.mpesaFraud,
          kcbMpesa: response.data.kcbMpesa,
          hustlerFund: response.data.hustlerFund,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // To update the record on submit
  handleSubmit = (event) => {
    event.preventDefault();
    const { mobileNo, simSwap, mpesaFraud, kcbMpesa, hustlerFund } = this.state;
    axios
      .post(
        "http://localhost:3000/caseList/updatecaseList/" +
          this.props.match.params.id,
        {
          mobileNo: mobileNo,
          simSwap: simSwap,
          mpesaFraud: mpesaFraud,
          kcbMpesa: kcbMpesa,
          hustlerFund: hustlerFund,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <form style={customStyle} onSubmit={this.handleSubmit}>
          <label>
            Mobile Number
            <input
              name="mobileNo"
              type="text"
              value={this.state.mobileNo}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Sim Swap
            <input
              name="simSwap"
              type="text"
              value={this.state.simSwap}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            M-pesa Fraud
            <input
              name="mpesaFraud"
              type="text"
              value={this.state.mpesaFraud}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            KCB M-Pesa
            <input
              name="kcbMpesa"
              type="text"
              value={this.state.kcbMpesa}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <br />
          <label>
            Hustler Fund
            <input
              name="hustlerFund"
              type="text"
              value={this.state.hustlerFund}
              onChange={this.handleChange}
              className="form-control"
            />
          </label>
          <input type="submit" value="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default UpdateProgress;
