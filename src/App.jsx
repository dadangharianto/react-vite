import { useState } from "react";
import Header from "./components/header";
function App() {
  const [likes, setLikes] = useState(0);
  const [outOfLimit, setOutOfLimit] = useState(false);

  function handleClick(action) {
    if (action === "+" && likes < 10) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      if (newLikes >= 10) setOutOfLimit(true);
    } else if (action === "-" && likes > 0) {
      const newLikes = likes - 1;
      setLikes(newLikes);
      console.log(newLikes);
      if (newLikes <= 0) setOutOfLimit(true);
    } else if (action === "Reset") {
      setLikes(0);
      setOutOfLimit(false);
    }
  }

  function Button({ name, disabled }) {
    return (
      <button onClick={() => handleClick(name)} disabled={disabled}>
        {name}
      </button>
    );
  }

  return (
    <>
      <Header />
      <Button name="-" disabled={outOfLimit} />
      <span> {outOfLimit ? "Done!" : likes} </span>
      <Button name="+" disabled={outOfLimit} />
      <br></br>
      <br></br>
      <Button name="Reset" />
    </>
  );
}

export default App;
