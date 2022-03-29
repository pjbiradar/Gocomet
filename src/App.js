import "./App.css";
import AllComponents from "./AllComponets";
import { CategoryProvider } from "./Context/ContextApi";

function App() {
  return (
    <div className="App">
      <CategoryProvider>
        <span className="mediaqury">
          <AllComponents />
        </span>
        {/* <div className="mediaqury1">
          For Better Experience Please View in Desktop Mode
        </div> */}
      </CategoryProvider>
    </div>
  );
}

export default App;
