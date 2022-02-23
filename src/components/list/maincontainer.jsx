import React from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Main(props) {
  function add(e) {
    e.preventDefault();
    props.Add(e.target[0].value);
  }
  return (
    <div className="main">
      <div className="add-task">
      <fieldset className="filed">
      <legend>Add Item</legend>
        <form onSubmit={add}>
          <input placeholder="Write here" spellcheck="false" type="text" />
          <button><AddCircleRoundedIcon htmlColor="#ffb325" sx={{ fontSize: 60 }}/></button>
        </form>
        </fieldset>
      </div>
      {props.children}
    </div>
  );
}
