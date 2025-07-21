import "./poster.css";

const Poster = () => {
  return (
    <>
      <div className="posters">
        <img src="./images/pos1.jpeg" alt="poster1" className="pos-img pos1"/>
        <img src="./images/pos2.jpeg" alt="poster2" className="pos-img pos2"/>
        <img src="./images/pos3.jpeg" alt="poster3" className="pos-img pos3"/>
      </div>
      <hr id="line"/>
    </>
  );
};

export default Poster;
