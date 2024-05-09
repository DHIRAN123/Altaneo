import React from 'react';
import './Team.css'; 

const Team = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team1.png" alt="Director" />
            <div className="box-content">
              <h3 className="title">Sonali</h3>
              <span className="post"> Director </span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team2.png" alt="CEO" />
            <div className="box-content">
              <h3 className="title"><a href="" target='blank'>Meenakshi P.</a></h3>
              <span className="post">CEO</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team4.png" alt="CTA" />
            <div className="box-content">
              <h3 className="title"><a href="" target='blank'>Jyotika B.</a></h3>
              <span className="post">CTA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
