import React from 'react';
import PropTypes from 'prop-types';
import styles from './ScheduleItem.css';

function ScheduleItem(props){
  return (
    <div className={styles.scheduleItem}>
      <p>{props.day}</p>
      <p>{props.location}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
    </div>
  );
}

ScheduleItem.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default ScheduleItem;
