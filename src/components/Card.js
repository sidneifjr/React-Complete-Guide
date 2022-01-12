import React from 'react';
import './card.css';

// Composition.
// The usage of a wrapper component is very useful for a modal or alert component.
function Card(props) {
  const classes = 'card ' + props.className; // anything we receive from outside props is added to the string.

  return <div className={classes}>{props.children}</div>;
}

export default Card;
