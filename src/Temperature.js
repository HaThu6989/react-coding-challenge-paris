import { useState } from "react";

export default function Temperature() {
  const [temperature, setTemp] = useState(10);

  return (
    <div>
      <h1>Temperature</h1>
      <input type="number" onChange={(e) => setTemp(e.target.value)} />
      {temperature < 10 && <p style={{ color: "blue" }}>It's cold ❄️</p>}
      {temperature >= 10 && temperature <= 30 && (
        <p style={{ color: "black" }}>It's nice 🌼</p>
      )}
      {temperature > 30 && <p style={{ color: "red" }}>It's warm ☀️</p>}
    </div>
  );
}
