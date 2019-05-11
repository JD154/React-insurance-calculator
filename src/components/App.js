import React, {Component} from 'react';
import Header from './Header';
import Form from './Form';
import calculateInsurance from '../helper';
import Resume from './Resume';
import Result from './Result';

class App extends Component {

  state = {
    result: '',
    data: {}
  }

  calculateInsurance = (data) => {
    const {value, brand, year, plan} = data;
    let result = calculateInsurance(value, year, brand, plan)
    console.log(result);

    const carData = {
      value: value,
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