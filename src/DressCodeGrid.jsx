import { useState, useEffect } from "react";

function DressCodeGrid() {
  const colorArr = [
    "#565449", // Original
    "#657868", // Original
    "#4f4b30", // Original
    "#908760", // Original
    "#feebca", // Original
    "#f4cca8", // Original
    "#dba38c", // Original
    "#482217", // Original
    "#495c60", // Original
    "#7b7167", // Original
    "#5d6455", // Original
    "#8c7a5e", // Anterior
    "#a68b6d", // Anterior
    "#3e2f1f", // Anterior
    "#d9b78f", // Anterior
    "#6b5842", // Anterior
    "#e4d5b7", // Anterior
    "#9c825f", // Anterior
    "#514839", // Anterior
    "#c9a27e", // Anterior
    "#705c4a", // Anterior
    "#b89c7a", // Nuevo: Beige dorado suave
    "#4a3b2e", // Nuevo: Marrón chocolate oscuro
    "#d8c2a5", // Nuevo: Crema arenosa
    "#876d54", // Nuevo: Marrón nuez
    "#5e6b58", // Nuevo: Verde musgo apagado
    "#a39171", // Nuevo: Terracota polvorienta
    "#3c3126", // Nuevo: Café profundo
    "#e1d1b2", // Nuevo: Marfil terroso
    "#796451", // Nuevo: Bronce rústico
    "#625a47", // Nuevo: Gris terroso cálido
  ];
  const numberOfCells = 100;

  // State to hold the array of colors for all cells
  const [cellColors, setCellColors] = useState(
    Array.from(
      { length: numberOfCells },
      () => colorArr[Math.floor(Math.random() * colorArr.length + 1)]
    )
  );

  // useEffect to change colors every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCellColors(
        Array.from(
          { length: numberOfCells },
          () => colorArr[Math.floor(Math.random() * colorArr.length)]
        )
      );
    }, 600);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [colorArr, numberOfCells]); // Dependencies (won't change, but included for correctness)

  return (
    <div className="dressCodeInner">
      <div className="dressCodeGrid">
        {cellColors.map((color, index) => (
          <div
            key={index}
            className="dressCodeCell"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DressCodeGrid;
