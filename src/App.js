import "./App.css";
import PlaygroundInputAudio from "./lib/components/PlaygroundInputAudio";
import PlaygroundInputImage from "./lib/components/PlaygroundInputImage";
import PlaygroundInputSketch from "./lib/components/PlaygroundInputSketch";
import PlaygroundOutputLabels from "./lib/components/PlaygroundOutputLabels";
function App() {
  const onSubmit = (e) => {
    console.log(e);
  };
  const data = {
    categories: ["Clase1", "Clase2", "Clase3", "Clase4", "Clase5"],
    prob: [0.1, 0.1, 0.2, 0.5, 0.1],
  };
  return (
    <div className="App">
      {/* <PlaygroundInputImage onSubmit={onSubmit}></PlaygroundInputImage> */}
      {/* <PlaygroundInputAudio onSubmit={onSubmit}></PlaygroundInputAudio> */}
      {/* <PlaygroundInputSketch
        onSubmit={onSubmit}
        strokeWidth={15}
        width="200px"
        height="200px"
      ></PlaygroundInputSketch> */}
      <PlaygroundOutputLabels {...data}></PlaygroundOutputLabels>
    </div>
  );
}

export default App;
