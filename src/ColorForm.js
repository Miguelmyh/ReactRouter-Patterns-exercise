import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ColorForm = ({ addColor }) => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    name: "",
    value: "#ffffff",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
    navigate("/colors");
  };

  return (
    <form className="ColorForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="color name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="color"
        name="value"
        value={formData.value}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default ColorForm;
