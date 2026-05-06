import { useState, type ChangeEvent, type FormEvent, type KeyboardEvent, type MouseEvent } from "react";

export const FromExample = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("red");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter"  --> do this
  }

  const handleButtonClickedSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
      
  }

  const handleFinalFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleFinalFormSubmit}>
      <input
        value={name}
        placeholder="Enter Your Name"
        onChange={handleNameChange}
        onKeyDown={handleKeyDown}
      />

      <select value={color} onChange={handleColorChange}>
        <option value="red">Red</option>
      </select>

      <button type="submit" onClick={handleButtonClickedSubmit}>
        Click
      </button>
    </form>
  );
};
