import React from "react";

const prizes = ["iPhone 12", "Macbook Pro", "iPad Pro", "AirPods Pro"];

function App() {
  const [ prize, setPrize ] = React.useState();

  const handleRandomPrize = () => {
    const randomIndex = Math.floor(Math.random() * prizes.length);
    setPrize(prizes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>{prize || 'Chưa có phần thưởng'}</h1>
      <button className="btn btn-primary " onClick={handleRandomPrize}>
        Lấy
      </button>
    </div>
  );
}

export default App;
