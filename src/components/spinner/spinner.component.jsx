import React from 'react';
import './spinner.styles.css';

export const Spinner = ({className}) => {
  return <div className={[className, 'spinner'].join(' ')}>
  </div>;
};
