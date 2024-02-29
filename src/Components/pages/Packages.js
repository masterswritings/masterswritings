import React from 'react';
import './Packages.css';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Packages() {
  const oneLOR = [
    { days: "2", cost: "1600" },
    { days: "3", cost: "1300" },
    { days: "5", cost: "1000" }
  ];

  const threeLORs = [
    { days: "2", cost: "4000" },
    { days: "3", cost: "3500" },
    { days: "5", cost: "3000" }
  ];

  const oneSOP = [
    { days: "2", cost: "3700" },
    { days: "3", cost: "3400" },
    { days: "5", cost: "3000" }
  ];

  const oneMeeting = [
    { days: "ASAP", cost: "5000" }
  ];

  const specialPackages = [
    { type: "3 LORs + 1 SOP", days: "3", cost: "6500" },
    { type: "3 LORs + 1 SOP", days: "5", cost: "5500" },
    { type: "3 LORs + 1 SOP + ONE ON ONE MEETING", days: "3", cost: "10000" },
    { type: "3 LORs + 1 SOP + ONE ON ONE MEETING", days: "5", cost: "9000" }
  ];

  return (
    <div className="packages">
      <h1>Our Service Packages</h1>

      {/* Render One LOR section */}
      <div className="service-section">
        <SchoolIcon className="service-icon" />
        <h2>1 LOR Packages</h2>
        {oneLOR.map((service, index) => (
          <div key={index} className="service-item">
            <span>{service.days} days</span>
            <span>Rs.{service.cost}</span>
          </div>
        ))}
      </div>

      {/* Render Three LORs section */}
      <div className="service-section">
        <GroupIcon className="service-icon" />
        <h2>3 LORs Packages</h2>
        {threeLORs.map((service, index) => (
          <div key={index} className="service-item">
            <span>{service.days} days</span>
            <span>Rs.{service.cost}</span>
          </div>
        ))}
      </div>

      {/* Render One SOP section */}
      <div className="service-section">
        <ArticleIcon className="service-icon" />
        <h2>1 SOP Packages</h2>
        {oneSOP.map((service, index) => (
          <div key={index} className="service-item">
            <span>{service.days} days</span>
            <span>Rs.{service.cost}</span>
          </div>
        ))}
      </div>

      {/* Render One Meeting section */}
      <div className="service-section">
        <MeetingRoomIcon className="service-icon" />
        <h2>One-on-One Meeting</h2>
        {oneMeeting.map((service, index) => (
          <div key={index} className="service-item">
            <span>{service.days}</span>
            <span>Rs.{service.cost}</span>
          </div>
        ))}
      </div>

      {/* Render Special Packages section */}
      <div className="service-section special">
        <StarBorderIcon className="service-icon" />
        <h2>Special Packages</h2>
        {specialPackages.map((service, index) => (
          <div key={index} className="service-item">
            <span>{service.type}</span>
            <span>{service.days} days</span>
            <span>Rs.{service.cost}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
