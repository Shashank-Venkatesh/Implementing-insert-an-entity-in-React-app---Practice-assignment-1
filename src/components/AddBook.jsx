import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: "", author: "", description: "", cover: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Data:", formData);
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} required />
        <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="url" name="cover" placeholder="Cover Image URL" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddBook;
