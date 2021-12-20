import React from "react";
import { useState } from 'react';

const AddTask = ({ addTask }) => {
    
    const [text, setText] = useState('');
    const [date, setDate] = useState('');  

    const onSubmit = (e) => {
        e.preventDefault();

        // Alert if form blank
        if (!text) {
            alert("Add the text")
            return
        }

        addTask({text, date});

        // Clear the form after submission
        setText('')
        setDate('')
    }

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task: </label>
          {/* We have default value 'text' as a state, and with a function 'onChange' we're pass in the event object 'e' and directly call 'setText' from here */}
          <input 
            type="text" 
            placeholder="Add Task" 
            value={text} onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Time: </label>
          <input 
            type="text" 
            placeholder="Add Day" 
            value={date} onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <input className="btn btn-block" type="submit" value="Submit task" />
      </form>
    </>
  );
};

export default AddTask;
