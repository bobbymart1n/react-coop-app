import React from 'react';
import ProduceItems from './../ProduceItems/ProduceItems';
import PropTypes from 'prop-types';
import styles from './AvailableProduce.css';

function AvailableProduce(props) {
  const curMonth = () => new Date().getMonth();
  const monthString = (currentMonth) => {
    return props.monthsItems.map(monthDate => monthDate.month)[currentMonth];
  };
  const getMonthArr = (month) => {
    return props.monthsItems.map(current => current.selection)[month];
  };
  const month = monthString(curMonth());
  const monthArr = getMonthArr(curMonth());
  return (
    <div >
      <div className={styles.availableProduceContainer}>
        <h3>Available Produce for {month}</h3>
        <div className={styles.produceItems}>
          {monthArr.map((item, index) =>
            <p key={index}>{item}</p>
          )}
        </div>
      </div>
      <div className={styles.produceItems}>
        {props.monthsItems.map((item, index) =>
          <ProduceItems
            month={item.month}
            selection={item.selection}
            key={index} />
        )}
      </div>
    </div>
  );
}

AvailableProduce.propTypes = {
  monthsItems: PropTypes.array.isRequired
};

export default AvailableProduce;
