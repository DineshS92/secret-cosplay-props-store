import React from 'react';
import './home.styles.scss';
import '../../components/menu-item/menu-item.component';
import '../../components/directory/directory.component';
import Directory from '../../components/directory/directory.component';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className='deal-of-the-day'>
        <img src={`https://via.placeholder.com/100?Text=Digital.com`} alt={`today's deal`}/>
        <span>Get 70% Off cart value when you buy 2 or more items</span>
      </div>
      <Directory />
    </div>
  );
}


export default HomePage;