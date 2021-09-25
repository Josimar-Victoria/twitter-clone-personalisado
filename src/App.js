import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Home from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />

      <Widgets />
      <GlobalStyles />
    </div>
  );
}

export default App;
