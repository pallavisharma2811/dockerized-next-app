import React from 'react';
import style from '../styles/Layout.module.css';
import Header from '../components/Header';
import Nav from '../components/Nav';
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={style.container}>
        <main className={style.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
