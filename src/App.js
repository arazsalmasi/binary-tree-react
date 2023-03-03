import React, { useState } from "react";
import "./styles.css";
import { createBinaryTree } from "./Node";
import TreeSide from "./TreeSide";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const tree = createBinaryTree(inputValue);

  return (
    <div className="App">
      <div className="h-16 shadow-md ">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          className="h-10 mt-3 bg-gray-100 border rounded-md pr-10 pl-10 text-center"
          placeholder="Inter your text ..."
        />
      </div>
      <TreeSide
        style={{ display: "flex", flexDirection: "column" }}
        node={tree}
        color={"bg-gray-400"}
      />
    </div>
  );
}
