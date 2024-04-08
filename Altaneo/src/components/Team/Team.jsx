import React from 'react';
import './Team.css'; 

const Team = () => {
  return (
    <div className="container mt-5">
      <div className="row my-5">
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team1.png" alt="Developer" />
            <div className="box-content">
              <h3 className="title">Dhiran M.</h3>
              <span className="post"> Junior Developer</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team2.png" alt="" />
            <div className="box-content">
              <h3 className="title"><a href="https://www.linkedin.com/in/dhiran-madhukar-5b9086172/" target='blank'>Meenakshi P.</a></h3>
              <span className="post">CEO</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="box">
            <img src="http://www.webcoderskull.com/img/team4.png" alt="" />
            <div className="box-content">
              <h3 className="title"><a href="https://www.linkedin.com/in/dhiran-madhukar-5b9086172/" target='blank'>Devinder </a></h3>
              <span className="post">CTO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
