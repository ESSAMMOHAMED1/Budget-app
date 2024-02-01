import React from 'react';
import Mainlayout from '../layout/Mainlayout';
import Hero from '../components/budget/hero/Hero';
import BudgetContent from '../components/budget/BudgetContent/BudgetContent';

const BudgetPage = () => {
  return (
    <Mainlayout>
      <Hero />
      <BudgetContent />
    </Mainlayout>
  );
};

export default BudgetPage;
