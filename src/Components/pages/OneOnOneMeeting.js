import React from 'react';
import './OneOnOneMeeting.css';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

function OneOnOneMeeting() {
  return (
    <div className="oneOnOneMeeting">
      <div className="oneOnOneMeeting-hero">
        <h1>Embark on Your Master's Journey: A Personal Guide Through Every Milestone</h1>
      </div>
      <div className="oneOnOneMeeting-intro">
        <p>At Masters' Writings, we don't just prepare documents; we prepare you for the entire spectrum of the master's experience. Our unique one-on-one consultation sessions offer an unparalleled walkthrough of the life of a master's student, from the exhilarating first day to the triumphant last.</p>
      </div>
      <div className="meeting-services">
        <div className="service-item">
          <EmojiPeopleIcon className="icon"/>
          <h2>Mental Resilience</h2>
          <p>Thriving in a new academic and cultural environment demands mental strength. We share personal experiences and tips on staying motivated and overcoming hurdles.</p>
        </div>
        <div className="service-item">
          <MonetizationOnIcon className="icon"/>
          <h2>Financial Navigation</h2>
          <p>From managing living expenses to finding on-campus jobs, we lay down practical advice on making the most of your finances abroad.</p>
        </div>
        <div className="service-item">
          <WorkIcon className="icon"/>
          <h2>Internship Insights</h2>
          <p>Step-by-step guidance on securing summer internships, leveraging our own journeys to highlight the best times to apply and strategies to stand out.</p>
        </div>
        <div className="service-item">
          <SchoolIcon className="icon"/>
          <h2>Academic Success</h2>
          <p>Tips and tricks on tackling assignments efficiently, managing time, and excelling in your coursework.</p>
        </div>
        <div className="service-item">
          <MeetingRoomIcon className="icon"/>
          <h2>Navigating CPT and OPT</h2>
          <p>Demystifying visa statuses to ensure you're fully prepared for work opportunities during and after your studies.</p>
        </div>
      </div>
      <div className="oneOnOneMeeting-cta">
        <p>Let's journey together. With Masters' Writings, you're not just preparing for a degree; you're gearing up for the adventure of a lifetime. Because when you know the path ahead, every step becomes a stride towards triumph.</p>
      </div>
    </div>
  );
}

export default OneOnOneMeeting;
