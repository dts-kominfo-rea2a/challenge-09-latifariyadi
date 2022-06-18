import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="contact">
        {contacts.map((element, index) => (
          <Contact key={index} data={element} />
        ))}
      </div>
    </div>
  );
};

export default App;
