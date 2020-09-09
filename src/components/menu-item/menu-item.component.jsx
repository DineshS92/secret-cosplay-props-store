import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => {
  return (
    <div className={`${size} menu-item`}>
      <div 
        className='background-image'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imageUrl})`
        }} />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;