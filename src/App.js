
import { useState } from 'react';
import './App.css';
import usePasswordGenerator from './hooks/usePasswordGenerator';
import PasswordStrength from './components/PasswordStrength';
import Button from './components/Button';
import CheckBox from './components/CheckBox';

function App() {
  const [length,setLength] = useState(4);
  const [constdata, setConstdata] = useState([
    {title:"Include Uppercase letter", state:false},
    {title:"Include Lowercase letter", state:false},
    {title:"Include Numbers", state:false},
    {title:"Include Symbols", state:false},
  ]);
  const [time,setTime] = useState(false);

  const changingcheckbox = (i)=>{
    const updatedcheckbox = [...constdata];
    updatedcheckbox[i].state = !updatedcheckbox[i].state;
    setConstdata(updatedcheckbox)
  }
  const {password,errorMessage,generatePassword}= usePasswordGenerator();

  const handleCopy =()=>{
    navigator.clipboard.writeText(password);
    setTime(true)

    setTimeout(() => {
      setTime(false);
    }, 1000);
  }
  return (
    <div className="container">
      {/* Password and copy button */}
      {password && (<div className="header">
        <div className="title">{password}</div>
        
        <Button text={time?"copied":"copy"} customClass="cpybutton" onClick={handleCopy}/>
      </div>)}
      
      {/* range of password */}
      <div className="header2">
        <span>
          <label htmlFor="">Character Length</label>
          <label htmlFor=""> {length} </label>
        </span>
        <input type="range"
        min={0}
        max={20}
        value={length}
        onChange={(e)=>{setLength(e.target.value)}} />
      </div>
      {/* checkboxes */}
      <div className="checkboxes">
      {constdata.map((checkbox,i)=>{
        return (
          <CheckBox key={i} onchange={()=>{changingcheckbox(i)}} title={checkbox.title} state={checkbox.state}/>
        )
      })}
      </div>
      {/*Error message div*/ }
      {errorMessage && <div className='errorMessage'>{errorMessage}</div>}

      {/*Password Strength DIV */}
      <PasswordStrength password={password}/>

      {/* password button */}
      <Button onClick={()=>generatePassword(constdata,length)} text="Generate Button" customClass="generatebtn"/>
    </div>
  );
}

export default App;
