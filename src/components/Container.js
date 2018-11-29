import React from 'react';
import Image from './../background.jpg'

const Container = props => {

  return (
    <div className="container"  >
      <div className="row">
        <div className="col-lg-8 col-md-4 mt-4 mx-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
