import React, { useState } from 'react'
import Register from './Register'
import Navbar from './Navbar'

const ButtonChanged = () => {
   const [buttonChanged, setButtonChanged] = useState(false);

  const handleParagraphClick = () => {
    setButtonChanged(!buttonChanged);
  };
  return (
    <div className="text-center mt-10">
      <Register onParagraphClick={handleParagraphClick} />
      <Navbar  changed={buttonChanged} />
    </div>
  )
}

export default ButtonChanged
