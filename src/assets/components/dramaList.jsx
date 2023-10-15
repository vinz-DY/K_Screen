import React from "react";
import DramaCard from "./DramaCard"; // Assurez-vous d'importer le composant DramaCard

const DramaList = ({ dramas }) => {
  return (
    <div className="drama-list">
      {dramas.map((drama, index) => (
        <DramaCard
          key={index}
          title={drama.title}
          image={drama.image}
          text={drama.text}
          rating={drama.rating}
        />
      ))}
    </div>
  );
};

export default DramaList;
