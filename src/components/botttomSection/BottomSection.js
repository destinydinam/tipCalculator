import './bottomSection.css';

const BottomSection = ({ peopleNumber, totalPerPerson, setpeopleNumber }) => {
  return (
    <div className="bottom">
      <div className="bottom__people">
        <label>People</label>
        <div className="bottom__people__buttons">
          <button onClick={() => setpeopleNumber(++peopleNumber)}>+</button>
          <h2 id="peopleNumber">{peopleNumber}</h2>
          <button
            onClick={() => peopleNumber > 1 && setpeopleNumber(--peopleNumber)}
          >
            -
          </button>
        </div>
      </div>
      <div className="bottom__total">
        <label>Total Per Person</label>
        <h3 className="bottom__totalAmount">{`$${totalPerPerson}`}</h3>
      </div>
    </div>
  );
};

export default BottomSection;
