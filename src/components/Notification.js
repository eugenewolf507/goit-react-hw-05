import React from 'react';
import propTypes from 'prop-types';

const Notification = ({ text }) => <span>{text}</span>;

Notification.propTypes = {
  text: propTypes.string.isRequired,
};

export default Notification;
