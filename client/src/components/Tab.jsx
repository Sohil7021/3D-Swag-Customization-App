import React, { useState } from 'react';
import { useSnapshot } from 'valtio';

const Tab = ({tab,isFilterTab,isActiveTab,handleClick}) => {
 



 const activestyles = isFilterTab && isActiveTab ? 
 {backgroundColor:snap.color,opacity:0.5}
 : {backgroundColor:"transparent",opacity:1}


  return (
    <div
    key={tab.name}
    className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4' }`}
    onClick={handleClick}
    style={activestyles}
    >

      <img 
      src={tab.icon}
      alt={tab.name}
      className={`${isFilterTab ? 'w-2/3 h-2/3' : 'w-11/12 h-11/12 object-contain'}`}
      
      
      />
      
    </div>
  )
}

export default Tab
