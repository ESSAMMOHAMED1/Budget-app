import React from 'react';
import BudgetNumber from './BudgetNumber';
import './Hero.css';
const Hero = () => {
  return (
    <div className="hero_budget">
      <div className="hero_budget-bg">
        <img src="https://unsplash.it/1200/400" alt="random img" />
      </div>
      <div className="container">
        <div className="hero_budget-numbers">
          <BudgetNumber money="500" title="total money">
            icon
          </BudgetNumber>
          <BudgetNumber money="500" title="total income">
            icon
          </BudgetNumber>
          <BudgetNumber money="500" title="total expanse">
            icon
          </BudgetNumber>
        </div>
      </div>
    </div>
  );
};

export default Hero;
