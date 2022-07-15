import Form from './components/form/Form';
import BottomSection from './components/botttomSection/BottomSection';
import './app.css';
import { useEffect, useState } from 'react';

const App = () => {
  const [billTotal, setBillTotal] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [peopleNumber, setPeopleNumber] = useState(1);
  const [totalPerPerson, setTotalPerPerson] = useState();

  // performs calculation if any of the variables in the dependency array changes
  useEffect(() => {
    handleCalculation(
      Number(billTotal),
      Number(tipPercentage),
      Number(peopleNumber)
    );
  }, [billTotal, tipPercentage, peopleNumber]);

  // Calculation
  const handleCalculation = (billTotal, tipPercentage, peopleNumber) => {
    const amount = billTotal * (tipPercentage / 100);
    const totalAmount = (billTotal + amount) / peopleNumber;
    setTotalPerPerson(totalAmount.toFixed(2));
  };

  return (
    <div className="app">
      <h3 className="heading">Welcome&#128512;!</h3>
      <h3 className="heading2">Calculate your tip here</h3>
      <Form
        billTotal={billTotal}
        setBillTotal={setBillTotal}
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
      />
      <BottomSection
        peopleNumber={peopleNumber}
        totalPerPerson={totalPerPerson}
        billTotal={billTotal}
        tipPercentage={tipPercentage}
        setpeopleNumber={setPeopleNumber}
        handleCalculation={handleCalculation}
      />
    </div>
  );
};
export default App;
