import { useState } from "react";

function App() {
  const [color, setColor] = useState("#d8e2dc");
  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-200 px-3 py-3 rounded-lg">
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "magenta" }}
            onClick={() => setColor("magenta")}
          >
            Magenta
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")}
          >
            Teal
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-black shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-md text-white shadow-lg"
            style={{ backgroundColor: "darkcyan" }}
            onClick={() => setColor("darkcyan")}
          >
            Cyan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
