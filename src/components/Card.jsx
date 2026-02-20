import React, { useEffect, useState } from "react";

export const Card = ({ id, name, sprites = [] }) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.95)",
        }}
      >

        <div style={styles.glow}></div>

        <div style={styles.idBadge}>
          #{id}
        </div>

        <img
          src={sprites[0]}
          alt={name}
          style={styles.image}
        />

        <h2 style={styles.name}>
          {name}
        </h2>

        <div style={styles.spriteRow}>
          {sprites.map(sprite =>
            sprite && (
              <img
                key={sprite}
                src={sprite}
                alt={name}
                style={styles.smallSprite}
              />
            )
          )}
        </div>

      </div>
    </div>
  );
};

const styles = {

  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  },

  card: {
    width: "340px",
    padding: "35px",
    borderRadius: "24px",
    background: "linear-gradient(145deg, #1e1e2f, #2c2c45)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
    textAlign: "center",
    color: "white",
    position: "relative",
    overflow: "visible",
    transition: "all 0.4s ease",
  },

  glow: {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  borderRadius: "24px",
  boxShadow: "0 0 60px rgba(0, 255, 255, 0.6)",
  animation: "pulse 2.5s ease-in-out infinite",
  zIndex: -1,
},


  idBadge: {
    position: "absolute",
    top: "18px",
    right: "20px",
    fontSize: "14px",
    background: "#ff4757",
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "bold",
    zIndex: 2,
  },

  image: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "20px",
    zIndex: 2,
    position: "relative",
  },

  name: {
    textTransform: "capitalize",
    fontSize: "26px",
    marginBottom: "18px",
    letterSpacing: "1px",
    zIndex: 2,
    position: "relative",
  },

  spriteRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    zIndex: 2,
    position: "relative",
  },

  smallSprite: {
    width: "55px",
    opacity: 0.85,
    transition: "transform 0.3s ease",
  },
};