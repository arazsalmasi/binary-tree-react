import React from "react";
import { useEffect, useState } from "react";

export default function TreeSide(props) {
  const [node, setNode] = useState(props.node);

  useEffect(() => {
    setNode(props.node);
    return () => {};
  }, [props.node]);

  // console.log(node);

  return (
    <div align="center">
      {node.left !== null || node.right !== null ? (
        <div>
          <div
            className={`${props.color} h-16 w-16 rounded-full m-6 shadow-md`}>
            <h4 className=" text-white text-center pt-5">{node?.val}</h4>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}>
            <TreeSide node={node.left} color={"bg-red-500"} />
            <TreeSide node={node.right} color={"bg-blue-500"} />
          </div>
        </div>
      ) : (
        <>
          <div key={node.id}>
            <div
              className={`${props.color} h-16 w-16 rounded-full m-6 shadow-md`}>
              <h4 className=" text-white text-center pt-5">{node?.val}</h4>
            </div>
          </div>
          {/* 
          we can hide side if val is null with this condition
          {node.val !== "" ? (
          ) : null} */}
        </>
      )}
    </div>
  );
}
