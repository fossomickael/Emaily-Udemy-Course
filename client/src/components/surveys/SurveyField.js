import React from 'react';

export const SurveyField = ({ input, label, meta: { error, touched } }) => {

  return (
    <div>
      <label>{label}</label>
  
      <input {...input} />
      <div className="red-text">
        {touched && error}
      </div>
      
    </div>
  );
};
