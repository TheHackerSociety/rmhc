import React from 'react';

const containterStyles = {
  margin: '10px 0',
};

const paragraphStyles = {
  textAlign: 'center',
  fontSize: '14px',
};

const imageStyles = {
  maxWidth: '30%',
};

const OperatedByInformation = () => (
  <div className="operated-by-info" style={containterStyles}>
    <p style={paragraphStyles}>Operated in your community by</p>
    <p style={paragraphStyles}>
      <img
        style={imageStyles}
        src="/images/Texas-Children’s-Hospital.jpg"
        alt="Texas Children’s Hospital"
      />
    </p>
  </div>
);

export default OperatedByInformation;
