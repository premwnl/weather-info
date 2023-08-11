import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <div className="container cont  text-center ">
      <div className="row align-items-center">
        <div className="col-3" style={{ padding: "0" }}>
          <Left />
        </div>
        <div className="col-9" style={{ padding: "0" }}>
          <Right />
        </div>
      </div>
    </div>
  );
}

export default App;
