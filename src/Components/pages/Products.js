import React from 'react';
import './Products.css';
import '../../App.css';
// Importing icons from Material UI or your preferred icon library
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import BuildIcon from '@mui/icons-material/Build';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssignmentIcon from '@mui/icons-material/Assignment';

function Products() {
  return (
    <div className="products">
      <div className="products-hero-section">
        <h1>Craft Your Path with a Statement of Purpose That Speaks Volumes</h1>
      </div>
      <div className="products-content-section">
        <ImportContactsIcon className="section-icon" />
        <div>
          <h2>Embark on Your Master's Journey:</h2>
          <p>The Statement of Purpose (SOP) is more than just an application essay; it's a narrative that weaves together your academic pursuits, professional aspirations, and personal milestones into a compelling story. At Masters' Writings, we believe every SOP is a unique opportunity to showcase not just where you've been, but where you're headed.</p>
        </div>
      </div>
      <div className="products-content-section">
        <RecordVoiceOverIcon className="section-icon" />
        <div>
          <h2>Why Your SOP Matters:</h2>
          <p>In the quest for a seat in a prestigious MS program, especially in the vibrant educational landscape of the USA, your SOP is your voice. It's your chance to convey your passion, your drive, and the clarity of your vision to the admissions committee. It's not just about what you want to achieve; it's about why and how you plan to achieve it.</p>
        </div>
      </div>
      <div className="products-content-section">
        <BuildIcon className="section-icon" />
        <div>
          <h2>Your Blueprint to an Unforgettable SOP:</h2>
          <p>Start with clarity. Dive deep into your motivations for pursuing an MS in your chosen field. Whether it's a lifelong passion or a recent discovery, your journey towards this decision tells a story. Why Boston University? What unique opportunities does it offer that align with your goals? 
           Your achievements are milestones that have shaped you. From academic accolades to transformative challenges, each experience has prepared you for this next step. Let's highlight these in a way that outlines your growth, resilience, and potential. 
           Every project, every internship, and every challenge is a chapter of your story. These experiences are not just a list; they're evidence of your curiosity, your dedication, and your ability to apply your knowledge. 
           Your MS isn't an end goal; it's a stepping stone. What do you envision for your post-graduation life? How does this program fit into your larger career aspirations and the impact you wish to make?  .</p>
        </div>
      </div>


      <div className="products-content-section">
        <AssignmentIcon className="section-icon" />
        <div>
          <h2>Our Promise</h2>
          <p>At Masters' Writings, our mission is to make your Statement of Purpose shine as brightly as your ambitions. With personalized guidance, we ensure your SOP captures the essence of your unique journey and goals. Our expertise in understanding admissions committee expectations means we guide you to craft an SOP that perfectly balances professional and academic goals with personal insights. We obsess over every detail—language, tone, structure—to make every word impactful. Trust us to elevate your SOP beyond the ordinary, making every sentence a stride towards your dream future. </p>
        </div>
      </div>
      

      <div className="products-cta-section">
        <HowToRegIcon style={{ color: '#ffffff', fontSize: '40px' }} /> {/* Apply inline style for white color */}
        <div>
          <h2>Ready to Make Your Mark?</h2>
          <p>Let Masters' Writings help you craft an SOP that's as ambitious as you are. Because when it comes to capturing your dreams on paper, every detail paints a picture of your future success.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
