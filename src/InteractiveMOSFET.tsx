import { useState } from "react";

export default function InteractiveMOSFET() {
  const [on, setOn] = useState(false);

  const toggleGate = () => setOn(!on);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      {/* MOSFET INTERACTIVE */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "30px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fafafa",
        }}
      >
        <h3 style={{ marginBottom: "10px", textAlign: "center" }}>
          Interactive MOSFET
        </h3>
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          Click the <b>gate</b> to turn the transistor <b>ON</b> or <b>OFF</b>.
        </p>

        <svg width="100%" height="180" viewBox="0 0 600 180">
          {/* Source */}
          <rect x="40" y="80" width="100" height="20" fill="#f4c430" rx="4" />
          <text x="65" y="75" fontSize="14">
            Source
          </text>

          {/* Drain */}
          <rect x="460" y="80" width="100" height="20" fill="#f4c430" rx="4" />
          <text x="485" y="75" fontSize="14">
            Drain
          </text>

          {/* Channel */}
          <rect x="140" y="85" width="320" height="10" fill="#aaa" rx="3" />

          {/* Electric Field */}
          {on && (
            <rect
              x="140"
              y="50"
              width="320"
              height="50"
              fill="rgba(0,200,83,0.3)"
              rx="5"
            />
          )}

          {/* Gate */}
          <rect
            x="290"
            y="20"
            width="20"
            height="40"
            fill={on ? "#00c853" : "#888"}
            style={{ cursor: "pointer", transition: "fill 0.3s" }}
            onClick={toggleGate}
          />
          <text x="285" y="15" fontSize="14">
            Gate
          </text>

          {/* Electron dots (animated) */}
          {on &&
            Array.from({ length: 5 }).map((_, i) => (
              <circle
                key={i}
                cx={150 - i * 60} // stagger starting position
                cy={90}
                r="5"
                fill="#00c853"
              >
                <animate
                  attributeName="cx"
                  values="150;450"
                  dur={`${1 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
        </svg>

        <p
          style={{
            fontWeight: "bold",
            color: on ? "#00c853" : "#b00020",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          State:{" "}
          {on
            ? "ON,  Current flows from source to drain"
            : "OFF,  No current flows"}
        </p>
      </div>
    </div>
  );
}
