import React from "react";
import "./Stats.css"
const Stats = () => {
  return (
    // streak
    <div id="stats">
        <h1 className="statHead">Github Stats</h1>
    <div className="statsMaindiv">
      <div >
        <a href="https://github.com/arpit2444">
          <img className="statimg1"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com/?user=arpit2444"
          />
        </a>
      </div>
 
      <div >
        <a href="https://github.com/arpit2444">  
          <img className="statimg2"
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=arpit2444"  //launguages
          />
        </a></div>
        <div>
        <a href="https://github.com/arpit2444">
          <img className="statimg3"
            align="left"
            src="https://github-readme-stats.vercel.app/api?username=arpit2444&show_icons=true&locale=en" //stats
          />
        </a>
      </div>
    </div></div>
  );
};

export default Stats;