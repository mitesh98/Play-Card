import { useState } from "react";
import "../styles/style.css";
import imageDiamond from "../assets/diamond.png";
import imageClub from "../assets/club.png";
import imageHeart from "../assets/heart.png";
import imageSpade from "../assets/spade.png";
import { getMapping, cardType } from "../Types/const";
const HelloWorld = () => {
  const [drwanNumbers, setDrwanNumbers] = useState([]);

  const drawFiveCards = () => {
    if (drwanNumbers.length === 52) {
      alert("All cards has been Drawn");
      return;
    }
    let newNumbers = [];
    while (newNumbers.length < 5 && drwanNumbers.length < 52) {
      const a = Math.floor(Math.random() * 100);
      if (
        a > 0 &&
        a < 53 &&
        !drwanNumbers.includes(a) &&
        !newNumbers.includes(a)
      ) {
        newNumbers.push(a);
      }
    }
    setDrwanNumbers([...newNumbers, ...drwanNumbers]);
  };

  return (
    <div className="bg-green-200 h-200">
      <div
        className="card"
        onClick={() => {
          drawFiveCards();
        }}
      >
        <div>Draw Card</div>
      </div>
      <div className="mt-25 flex flex-wrap justify-start">
        {drwanNumbers.length > 0 &&
          drwanNumbers.map((number) => {
            return (
              <div key={number} className=" bg-white h-100 w-25 m-4">
                {/* <img src="data:image/jpeg;base64,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"/> */}
                {getMapping(number).type === cardType.CLUB && (
                  <img src={imageClub} className="h-4 w-5" />
                )}
                {getMapping(number).type === cardType.DIAMOND && (
                  <img src={imageDiamond} className="h-4 w-5" />
                )}
                {getMapping(number).type === cardType.HEART && (
                  <img src={imageHeart} className="h-4 w-5" />
                )}
                {getMapping(number).type === cardType.SPADE && (
                  <img src={imageSpade} className="h-4 w-5" />
                )}
                <div>{getMapping(number).number}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HelloWorld;
