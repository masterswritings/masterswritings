import React from 'react';
import './Services.css'; // Ensure this path matches your project structure
// Import Material UI icons
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BrushIcon from '@mui/icons-material/Brush';
import PanToolIcon from '@mui/icons-material/PanTool';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Services() {
  return (
    <div className="services">
      <div className="services-hero-section">
        <h1>Unlock Your Potential with Masterful Letters of Recommendation</h1>
      </div>
      <div className="services-content-section">
        <SchoolIcon className="section-icon" />
        <div>
          <h2>Elevate Your Application:</h2>
          <p>In the quest for your dream master's program, every detail counts—especially the voices that vouch for you. A Letter of Recommendation (LOR) isn't just a formality; it's a powerful testament to your abilities, character, and potential. At Masters' Writings, we understand the weight of these letters. That's why we're here to ensure your recommenders' endorsements are as impactful as your aspirations.</p>
        </div>
      </div>
      <div className="services-content-section">
        <ThumbUpIcon className="section-icon" />
        <div>
          <h2>Why LORs Matter:</h2>
          <p>Admissions committees see beyond the polished essays and curated resumes. They seek the genuine, the exceptional, and the proven. LORs offer a candid glimpse into your capabilities and achievements through the lens of those who've seen you in action. They validate your narrative, turning your application from a collection of papers into a compelling story of potential.</p>
        </div>
      </div>
      <div className="services-content-section">
        <BrushIcon className="section-icon" />
        <div>
          <h2>Crafting the Perfect Endorsement:</h2>
          <p>Every LOR we facilitate is rooted in authenticity. We guide your recommenders to highlight your unique strengths, backed by vivid examples and personal anecdotes. It's not just about praising; it's about illustrating why you stand out.
From the classroom to the lab, from teamwork to leadership, we ensure your LORs reflect a holistic and impressive profile. Our approach ensures that every letter complements the others, presenting a well-rounded view of your potential. 
Choosing the right recommender is an art. We help you identify individuals who can provide the most insightful and impactful perspectives on your journey. Whether it's a professor who's witnessed your intellectual curiosity or a manager who's seen your leadership skills in action, we ensure your LORs resonate with your goals. </p>
        </div>
      </div>
      <div className="services-content-section">
        <PanToolIcon className="section-icon" />
        <div>
          <h2>Our Promise:</h2>
          <p>With Masters' Writings, you're not just getting a service; you're gaining a partner in your pursuit of academic excellence. We combine our recent graduate insights with a deep understanding of what admissions committees seek, ensuring your LORs are not only exceptional but also true reflections of your journey and aspirations.</p>
        </div>
      </div>
      <div className="services-cta-section">
        <StarBorderIcon style={{ color: '#ffffff', fontSize: '40px' }} />
        <div>
          <h2>Ready to Stand Out?</h2>
          <p>Let us help you craft Letters of Recommendation that speak volumes. Because when experience meets ambition, the possibilities are limitless.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
