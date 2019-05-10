import React, { Component } from 'react';

class Result extends Component{

  showCost = () => {
    const resultPrice = this.props.result;

    if (!resultPrice) return null;

    return(
      <div className="resume-wrapper">
        <h1 className="form-title">Calculated price</h1>
        <p>${resultPrice}</p>
      </div>
    )
  }
  render(){
    return(
      <div>
        {this.showCost()}
      </div>
    )
  }
}

export default Result;