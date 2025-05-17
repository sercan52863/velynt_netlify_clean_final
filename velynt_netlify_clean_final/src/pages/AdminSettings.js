
import React, { useState } from 'react';

export default function AdminSettings() {
  const [logo, setLogo] = useState(null);
  const [color, setColor] = useState("#ffffff");
  const [font, setFont] = useState("serif");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const objectURL = URL.createObjectURL(file);
        setLogo(objectURL);
      } catch (err) {
        console.error("Error loading logo file", err);
      }
    }
  };

  return (
    <div style={{ fontFamily: font, backgroundColor: color, minHeight: "100vh", padding: "2rem" }}>
      <h1>Velynt Admin Panel - Theme Settings</h1>

      <div>
        <label>Upload Logo: </label>
        <input type="file" onChange={handleFileChange} />
        {logo && <img src={logo} alt="Logo Preview" style={{ height: 60, marginTop: 10 }} />}
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Select Theme Color: </label>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>

      <div style={{ marginTop: 20 }}>
        <label>Font: </label>
        <select value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="serif">Serif</option>
          <option value="sans-serif">Sans-serif</option>
          <option value="monospace">Monospace</option>
        </select>
      </div>
    </div>
  );
}
