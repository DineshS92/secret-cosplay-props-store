import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div 
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageUrl})`
      }} 
      className={`${size} menu-item`}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;