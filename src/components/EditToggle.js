import React from 'react';

export default function EditToggle(props) {
  return ( //e = event
    <select className="dropDownContainer ml0" onChange={(e)=> props.update(e.target.value)}
    disabled={props.allowEdit === 'false'}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}

//target is the element 