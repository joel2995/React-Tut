import React from 'react';

const Content = () => {

    function handleNameChange(){
    const names=["Earn" , "Grow" , "Give"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <p>Lets {handleNameChange()} money</p>
  )
}

export default Content