import React from 'react';
import headerStyles from '../styles/Header.module.css';

const Header = () => {
  const x = 'red';
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Freight</span> IQ
      </h1>
      <style jsx>
        {`
          .title {
            color: ${x === 'red' ? 'red' : 'blue'};
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            justify-content: center;
          }
        `}
      </style>
      <p className= {headerStyles.description}>Keep up to date </p>
    </div>
  );
};

export default Header;
