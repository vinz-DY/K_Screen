import "../components/Kcard.css";

const KCard = ({ children }) => {
  return (
    <div className="card">
      <div>
        <h1>{children}</h1>
      </div>
      <img className="screen" src="src\assets\mouse.jpg" alt="" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
          officia, repudiandae esse iste ad excepturi voluptate cum dolorem
          provident optio est beatae ducimus nam, temporibus omnis sed at earum
          harum!
        </p>
        <button className="check" >vu</button>
      </div>
    </div>
  );
};

export default KCard;
