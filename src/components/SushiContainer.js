import React,{useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, eatSushi}) {
  const [sushiIndex, setSushiIndex] = useState(0)
  const sushi_shown = 4
  // console.log(sushis)
  function handleNext(){
   setSushiIndex(sushiIndex + sushi_shown)
  }
  
  return (
    <div className="belt">
      {sushis.slice(sushiIndex, sushiIndex + sushi_shown).map((sushi) => (
        <Sushi sushi={sushi} key={sushi.id} eatSushi={eatSushi}/>
      ))}
      {/* Render Sushi components here! */}
      <MoreButton handleClick={handleNext}/>
    </div>
  );
}

export default SushiContainer;
