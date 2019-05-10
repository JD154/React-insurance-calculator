import React, { Component } from 'react';

class Resume extends Component {

  showData = () => {
    const {brand, year, plan} = this.props.data;

    if (!brand || !year || !plan) return null;

    return(
      <div className="resume-wrapper">
        <h1 className="form-title">Your selected</h1>
        <ul>
          <li>Brand: {brand}</li>
          <li>Year: {year}</li>
          <li>Plan: {plan}</li>
        </ul>
      </div>
    );
  }
  render(){
    return(
      <div>
        {this.showData()}
      </div>
    )
  }
}

export default Resume;