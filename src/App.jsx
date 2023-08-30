import "./App.css";
import { CallBackFunctions } from "./components/CallBackFunctions";
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div className="card-list">
        <Card name="Jane" job="developer" profile="jane.jpg" />
        <Card name="Jack" job="dancer" profile="jack.jpg" />
        <Card name="John" job="cook" profile="john.jpg" />
        <Card name="Jennifer" job="diver" profile="jennifer.jpg" />
        <CallBackFunctions />
      </div>
    </>
  );
}

export default App;
