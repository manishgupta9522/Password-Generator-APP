import React from 'react';

const PasswordStrength = ({password =""}) => {
  
    const getPasswordStrength = ()=>{
        const passwordlength=password.length;

  if (passwordlength<1){
    return ""
  }else if(passwordlength<4){
    return "Very Poor";
  }else if(passwordlength<8){
    return "Poor";
  }else if(passwordlength<12){
    return "Good";
  }else if(passwordlength<16){
    return "Strong";
  }else {
    return "Very Strong";
  }
    }

  const passwordStrength = getPasswordStrength();

  if(!passwordStrength) return <React.Fragment/>

  return (
    <div className="password-strength">Strength: <span style={{fontWeight:"bold"}}>{passwordStrength}</span></div>
  )
}

export default PasswordStrength;
