import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "../notes";

function App() {
  return (
    <>
      <Header />
      {notes.map((note) => (
        <Note 
          key={note.id} 
          title={note.title} 
          content={note.content} />
      ))}
      <Note />
      <Footer />
    </>
  );
}

export default App;
