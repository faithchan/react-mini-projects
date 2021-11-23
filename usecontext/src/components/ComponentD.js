import React, { useContext } from 'react';
import DataContext from '../contexts/DataContext';


function ComponentD() {
  const dataContext=useContext(DataContext)
  let style = {
    marginLeft: '20px',
    marginTop: '10px'
  };

  return (
    <div style={style}>
      This is Component D
      <div className="user" style={style}>
        <div>
          {' '}
          username: <b></b>
        </div>
        <div className="avatar">
          <img className="avatar-image" src={dataContext.avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default ComponentD;
