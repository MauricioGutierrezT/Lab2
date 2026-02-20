import React from "react";

export const Card = ({ id, name, sprites = [] }) => {

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>

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
    marginTop: "40px",
  },

  card: {
    width: "320px",
    padding: "30px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #1e1e2f, #2a2a40)",
    boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
    textAlign: "center",
    color: "white",
    position: "relative",
    transition: "transform 0.3s ease",
  },

  idBadge: {
    position: "absolute",
    top: "15px",
    right: "20px",
    fontSize: "14px",
    background: "#ff4757",
    padding: "5px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
  },

  image: {
    width: "180px",
    height: "180px",
    objectFit: "contain",
    marginBottom: "15px",
  },

  name: {
    textTransform: "capitalize",
    fontSize: "24px",
    marginBottom: "15px",
    letterSpacing: "1px",
  },

  spriteRow: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  smallSprite: {
    width: "50px",
    opacity: 0.8,
  },
};
