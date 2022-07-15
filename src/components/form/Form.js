import './form.css';

const Form = ({ billTotal, setBillTotal, tipPercentage, setTipPercentage }) => {
  return (
    <form
      className="form"
      action="tipCalculator"
      onSubmit={(e) => e.preventDefault()}
    >
      <label>Bill Total</label>
      <span>$</span>
      <input
        type="text"
        placeholder="0.00"
        value={billTotal}
        onChange={(e) => setBillTotal(e.target.value)}
      />
      <label>Tip Percentage</label>
      <span>%</span>
      <input
        type="text"
        placeholder="10"
        value={tipPercentage}
        onChange={(e) => setTipPercentage(e.target.value)}
      />
    </form>
  );
};

export default Form;
