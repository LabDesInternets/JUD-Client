import React from 'react';

const DashBoard = props => {
  const { element } = props;
  return (
    <div ref={element}>
      ESPACE CLIENT
    </div>
  )
}

export default DashBoard;
