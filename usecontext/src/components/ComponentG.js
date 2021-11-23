// import useContext Hook
import React from 'react';

function ComponentG(props) {
  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      This is Component G
      <div style={style}>
        <div className="avatar">
          <img className="avatar-image" src="" alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default ComponentG;
