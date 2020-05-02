import React, { useState } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = props => {
  const [title, setTitle] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        value={title}
        onKeyPress={keyPressHandler}
        type="text"
        id="title"
        placeholder="Enter Todo title"
      />
      <label htmlFor="title" className="active">
        Enter Todo title
      </label>
    </div>
  );
};
