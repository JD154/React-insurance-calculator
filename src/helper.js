function calculateInsurance(year, base, model, plan ){
  let calculation = base;
  let yearDiff = new Date().getFullYear() - year;  

  calculation -= ((yearDiff * 3) * calculation) / 100;
    
  switch (model) {
    case 'european':
    calculation = calculation * 1.30;
    break;
    case 'american':
    calculation = calculation * 1.15;
    break;
    case 'asiatic':
    calculation = calculation * 1.05;
    break;
    default:
    break;
  }
  
  calculation = (plan === 'basic') ? calculation * 1.20 : calculation * 1.50;
    
  return parseFloat(calculation).toFixed(2);
}

export default calculateInsurance;