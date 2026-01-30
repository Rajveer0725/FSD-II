import ButtonComp from "./components/Button";
import CheckboxComp from "./components/Checkbox";
import RatingComp from "./components/Rating";
import SelectComp from "./components/Select";
import TextFieldComp from "./components/TextField";

function App() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <h2>Experiment 2 – UI using Component Libraries</h2>

      <ButtonComp /><br /><br />
      <CheckboxComp /><br /><br />
      <RatingComp /><br /><br />
      <SelectComp /><br /><br />
      <TextFieldComp />
    </div>
  );
}

export default App;