import React from 'react';
import './button.styles.css';

export const Button = ({ name, method }) => {
	return (
		<button className={name} onClick={method}>
			Roll
		</button>
	);
};
