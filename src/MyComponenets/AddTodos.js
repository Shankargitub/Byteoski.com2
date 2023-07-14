import React, { useState } from 'react';

export const AddTodos = (props) => {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !dis) {
      alert("I am not comfortable");
    } else {
      props.addTodos(title, dis);
      setTitle("");
      setDis("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todos title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dis" className="form-label">
            Todos dis
          </label>
          <input
            type="text"
            value={dis}
            onChange={(e) => setDis(e.target.value)}
            className="form-control"
            id="dis"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todos
        </button>
      </form>
    </div>
  );
};



