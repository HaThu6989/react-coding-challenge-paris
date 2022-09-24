import { useState } from "react";

export default function CustomizeImage() {
  const [url, setUrl] = useState(
    "https://tackexinh.com/wp-content/uploads/2021/04/hinh-anh-lang-que-viet-nam-02.jpg"
  );
  const [size, setSize] = useState(150);
  return (
    <div>
      <h1>Customize Image</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <br />
      <input
        type="range"
        min="0"
        max="200"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <br />
      <p>
        {" "}
        {size} x {size} px{" "}
      </p>
      <br />
      <img src={url} style={{ width: `${size}px` }} />
    </div>
  );
}
