import React, { Component } from 'react';

class Form extends Component{

  brandRef = React.createRef();
  yearRef = React.createRef();
  planRef = React.createRef();
  completeRef = React.createRef();

  handle = (e) => {
    e.preventDefault();
    const planType = this.planRef.current.checked ? 'complete' : 'basic';

    const carInfo = {
      brand: this.brandRef.current.value,
      year: this.yearRef.current.value,
      plan: planType
    }
    this.props.handle(carInfo);

    e.currentTarget.reset();
  }
  
  render(){
    return(
      <form className="form-wrapper" onSubmit={this.handle}>
      <h1 className="form-title">Complete the following fields</h1>
        <div className="input-field">
          <label>Brand</label>
          <select name="brand" ref={this.brandRef}>
            <option value="american">American</option>
            <option value="european">European</option>
            <option value="asiatic">Asiatic</option>
          </select>
        </div>
        <div className="input-field">
          <label>Year</label>
          <select name="year" ref={this.yearRef}>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="input-field">
          <label>Plan</label>
          <input type="radio" name="plan" value="basic" className="radio-input" ref={this.planRef}/>Basic
          <input type="radio" name="plan" value="complete" className="radio-input" ref={this.planRef}/>Complete
        </div>
        <button type="submit" className="form-btn">Calculate</button>
      </form>
    )
  }
}

export default Form;