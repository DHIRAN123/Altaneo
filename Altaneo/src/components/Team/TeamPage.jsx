import React from 'react';
import './TeamPage.css'; // Import CSS file for styling
import ceomam from '../../assets/ceomam.png'; // Import the image directly
import Footer from '../Footer/Footer';

const TeamPage = () => {
  
  const teamMembers = [
    {
      name: 'Meenakshi pawar',
      role: 'Founder & CEO ',
      description: 'John is a talented software engineer with expertise in web development.',
      photo: ceomam 
    },
    {
      name: 'Jyotika B.',
      role: 'CTA',
      description: '',
      photo:ceomam 
    },
    {
      name: 'Jyotika B.',
      role: 'Sonali',
      description: '',
      photo:ceomam 
    },
    {
      name: 'Dhiren Madhukar',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Shanuj',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Aryan gupta',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Pranav',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Abhishek ',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Himanshu',
      role: 'Developer',
      description: 'IT Guy',
      photo:ceomam 
    },
    {
      name: 'Aananya',
      role: 'Marketing',
      description: 'Marketing girl',
      photo:ceomam 
    },
    {
      name: 'Credit ',
      role: 'Credit Analyst',
      description: 'Finance guy',
      photo:ceomam 
    },
      ];

  return (
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <div className="team-member-photo">
            <img src={member.photo} alt={member.name} /> {/* Use imported image directly */}
          </div>
          <div className="team-member-details">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
          </div>
        </div>
    ))}
    <Footer/>
      
    </div>
    
  );
}

export default TeamPage;
