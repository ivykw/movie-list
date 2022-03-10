import React from 'react';

var Add = (props) => {
  return (
    <form id="add" onSubmit = {props.handleAddSubmit}>
      <input id="add-input" onChange = {e => props.handleAddInput(e.target.value)}></input>
      <button id="add-button">Add</button>
    </form>
  )
}

export default Add;