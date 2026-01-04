import { useState } from "react";

const initialBoard = [
  { id: 0, value: '', row: 0, col: 0 },
  { id: 1, value: '', row: 0, col: 1 },
  { id: 2, value: '', row: 0, col: 2 },
  { id: 3, value: '', row: 1, col: 0 },
  { id: 4, value: '', row: 1, col: 1 },
  { id: 5, value: '', row: 1, col: 2 },
  { id: 6, value: '', row: 2, col: 0 },
  { id: 7, value: '', row: 2, col: 1 },
  { id: 8, value: '', row: 2, col: 2 },
];

type initialBoardType = {
    id: number,
    value: string,
    row: number,
    col: number
}

const TicTacToe = () => {
  const [boardValues, setBoardValues] = useState<initialBoardType[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winnerBlock, setWinnerBlock] = useState("");

  const winValues = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winCheck = (values: initialBoardType[]) => {
    for (let pattern of winValues) {
      const [a, b, c] = pattern;
      if (
        values[a].value &&
        values[a].value === values[b].value &&
        values[a].value === values[c].value
      ) {
        return values[a].value;
      }
    }
    return null;
  };

  const handleButtonClick = (id: number) => {
    if (winnerBlock) return;

    const updatedBoard = boardValues.map((val) =>
      val.id === id && val.value === "" ? { ...val, value: currentPlayer } : val
    );

    const win = winCheck(updatedBoard);
    if (win) {
      setWinnerBlock(win);
    } else {
      setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    }

    setBoardValues(updatedBoard);
  };

  const handleReset = () => {
    setBoardValues(initialBoard.map((cell) => ({ ...cell, value: "" })));
    setWinnerBlock("");
    setCurrentPlayer("X");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {boardValues.map((value) => (
          <div
            key={value.id}
            onClick={() => handleButtonClick(value.id)}
            style={{
              border: "2px solid white",
              height: "60px",
              width: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.5rem",
              cursor: winnerBlock ? "not-allowed" : "pointer",
              color: value.value === "X" ? "skyblue" : "lightgreen",
            }}
          >
            {value.value}
          </div>
        ))}
      </div>

      {winnerBlock && (
        <h3 style={{ color: "lightgreen", marginTop: "1rem" }}>
          {winnerBlock} Wins!
        </h3>
      )}

      {!winnerBlock && (
        <h3 style={{ marginTop: "1rem" }}>
          Current Turn: <span style={{ color: "skyblue" }}>{currentPlayer}</span>
        </h3>
      )}

      <button onClick={handleReset} style={{ marginTop: "10px" }}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
