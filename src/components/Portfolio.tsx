import * as React from 'react';

interface IPortfolioProps {
}

const Portfolio: React.FunctionComponent<IPortfolioProps> = (props) => {
  return (
    <div className='portfolio'>
    <div className="portfolio-container">
        <div className="skills-title">
            <h1>Projects</h1>
        </div>
    </div>
    </div>
  );
};

export default Portfolio;
