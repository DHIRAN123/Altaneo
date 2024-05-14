import React from 'react';
import './Team.css'; 
import team1 from '../../assets/team1.png';
import team2 from '../../assets/team2.png';
import team3 from '../../assets/team3.png';


const Team = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src={team3} alt="Director" />
            <div className="box-content">
              <h3 className="title"><a href="TeamPage" target='blank'>Sonali</a></h3>
              <span className="post"> Director </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src={team1} alt="CEO" />
            <div className="box-content">
              <h3 className="title"><a href="TeamPage" target='blank'>Meenakshi P.</a></h3>
              <span className="post">CEO</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src={team2} alt="CTA" />
            <div className="box-content">
              <h3 className="title"><a href="TeamPage" target='blank'>Jyotika B.</a></h3>
              <span className="post">CTA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
