import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact online={true}  name={"Anitta Sutton"} avatar={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}  />
    </div>
  );
}

export default App;
