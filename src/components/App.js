import React, {Component} from 'react';
import Header from './Header';
import Form from './Form';
import {getYearDiff, getDiff, getIncrement, getPlan, firstMayus} from '../helper';
import Resume from './Resume';
import Result from './Result';

class App extends Component {

  state = {
    result: '',
    data: {}
  }

  calculateInsurance = (data) => {
    const {brand, year, plan} = data;

    let result = 2000;

    const diff = getYearDiff(year);
    
    result -= getDiff(diff, result);

    result = getIncrement(brand) * result;
    
    result = parseFloat(getPlan(plan) * result).toFixed(2);
    console.log(result);

    const carData = {
      brand: brand,
      year: year,
      plan: plan
    }

    this.setState({
      result: result,
      data: carData
    })
  }

   render(){
     return(
       <div className="app-container">
        <Header titulo='Insurance calculator'/>
        <div className="form-container">
          <Form 
            handle={this.calculateInsurance}
          />
          <Resume 
            data={this.state.data}
          />
          <Result 
            result={this.state.result}
          />
        </div>
       </div>
     )
   }
}

export default App;