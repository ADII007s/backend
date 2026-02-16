import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch Notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/api/notes");
      setNotes(res.data.notes);
      setError(null);
    } catch (err) {
      setError("Failed to fetch notes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Create Note
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description } = e.target.elements;

    if (!title.value || !description.value) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:4000/api/notes", {
        title: title.value,
        description: description.value,
      });

      e.target.reset(); // reset form
      fetchNotes(); // refresh list
    } catch (err) {
      alert("Error creating note");
    }
  };

  // Delete Note
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/notes/${id}`);
      fetchNotes();
    } catch (err) {
      alert("Error deleting note");
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Notes App 🚀</h1>

      <form className="note-create-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Title" name="title" />
        <input type="text" placeholder="Enter Description" name="description" />
        <button type="submit">Create Note</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <button onClick={() => handleDelete(note._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
