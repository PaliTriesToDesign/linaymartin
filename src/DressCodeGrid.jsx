import { useState, useEffect } from "react";

function DressCodeGrid() {
  const colorArr = [
    "#565449",
    "#657868",
    "#4f4b30",
    "#908760",
    "#feebca",
    "#f4cca8",
    "#dba38c",
    "#482217",
    "#495c60",
    "#7b7167",
    "#5d6455",
    "#8c7a5e",
    "#a68b6d",
    "#3e2f1f",
    "#d9b78f",
    "#6b5842",
    "#e4d5b7",
    "#9c825f",
    "#514839",
    "#c9a27e",
    "#705c4a",
    "#b89c7a",
    "#4a3b2e",
    "#d8c2a5",
    "#876d54",
    "#5e6b58",
    "#a39171",
    "#3c3126",
    "#e1d1b2",
    "#796451",
    "#625a47",
  ];

  const cols = 3;
  const rows = 3;
  const numberOfCells = cols * rows;

  const [cellColors, setCellColors] = useState(
    Array.from(
      { length: numberOfCells },
      () => colorArr[Math.floor(Math.random() * colorArr.length)]
    )
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCellColors(
        Array.from(
          { length: numberOfCells },
          () => colorArr[Math.floor(Math.random() * colorArr.length)]
        )
      );
    }, 600);

    return () => clearInterval(interval);
  }, [colorArr, numberOfCells]);

  return (
    <div className="dressCodeInner">
      <div className="dressCodeGrid">
        {cellColors.map((color, index) => (
          <div
            key={index}
            id={`dressCodeCell${index}`} // ID único basado en el índice
            className="dressCodeCell"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DressCodeGrid;
