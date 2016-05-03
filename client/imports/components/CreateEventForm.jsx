
import React from 'react';

export default class SubmitForm extends React.Component {
  render() {
    return (
      <div>
        place:<input type='text'/>
        address:<input type='text'/>
        date: <input type='date'/>
        <button>create</button>
      </div>
    );
  }
}
