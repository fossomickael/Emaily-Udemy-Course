import React from 'react';

export const SurveyField = ({ input, label }) => {
  console.log(label);
  return (
    <div>
      <label>{label}</label>
  
      <input {...input} />
    </div>
  );
};
