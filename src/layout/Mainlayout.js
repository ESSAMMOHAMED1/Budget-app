import React from 'react';
import Header from '../components/layout/header/Header';

const Mainlayout = (props) => {
  return (
    <>
      <Header/>
      <main>{props.children}</main>
    </>
  );
};

export default Mainlayout;
