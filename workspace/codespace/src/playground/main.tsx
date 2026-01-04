import { useState } from "react";

type MoveSetType = {
  id: number;
  value: string;
};

const PlayGround = () => {
  const initialMoveSet = [
    {
      id: 0,
      value: "",
    },
    {
      id: 1,
      value: "",
    },
    {
      id: 2,
      value: "",
    },
    {
      id: 3,
      value: "",
    },
    {
      id: 4,
      value: "",
    },
    {
      id: 5,
      value: "",
    },
    {
      id: 6,
      value: "",
    },
    {
      id: 7,
      value: "",
    },
    {
      id: 8,
      value: "",
    },
  ];

  const winnerSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winnerCheck = (values:MoveSetType[]) => {
    for (let patternValues of winnerSet) {
      const [a,b,c] = patternValues;
      if(values[a].value === values[b].value && values[a].value === values[c].value && values[a].value) {
        return values[a].value;
      }
    }
    return null;
  }

  const [moveSet, setMoveSet] = useState<MoveSetType[]>(initialMoveSet);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  const handleMoveClick = (id: number) => {
    if (winner) { return }
    const currentMoveSet = moveSet.map((data) => {
      return data.id === id && data.value === ""
        ? { ...data, value: currentPlayer }
        : data;
    });
    setMoveSet(currentMoveSet);
    const currentWinner = winnerCheck(currentMoveSet);
    if(currentWinner){
      setWinner(currentWinner);
    }
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  };

  const handleReset = () => {
    setMoveSet(initialMoveSet);
    setCurrentPlayer("X");
    setWinner("");
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 60px)",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {moveSet.map((value) => {
          return (
            <div
              onClick={() => handleMoveClick(value.id)}
              key={value.id}
              style={{
                border: "2px solid white",
                height: "60px",
                width: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                margin: "0px",
                cursor: winner ? "not-allowed" : "pointer",
                color: value.value === "X" ? "skyblue" : "lightgreen",
              }}
            >
              {value.value}
            </div>
          );
        })}
      </div>
      <button
        onClick={handleReset}
        style={{ padding: "4px", border: "1px solid black", marginTop: "10px" }}
      >
        Reset
      </button>
      {winner && (
        <p style={{color: winner === 'X' ? 'cyan': 'yellow'}}>{winner} wins!</p>
      )}
    </div>
  );
};

export default PlayGround;
