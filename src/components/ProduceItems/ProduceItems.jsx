import React from 'react';
import PropTypes from 'prop-types';

function ProduceItems(props) {
  return(
    <div>
      <h3>{props.month}</h3>
      {props.selection.map((produce, index) =>
        <p key={index}>{produce}</p>
      )}
    </div>
  );
}

ProduceItems.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default ProduceItems;
