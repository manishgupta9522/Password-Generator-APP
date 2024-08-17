import { useState } from "react"

const usePasswordGenerator = () => {
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const generatePassword = (constdata,length)=>{
        let charSet='', finalpassword = '';

        const selectedOption = constdata.filter((checkbox)=>checkbox.state);

        if (selectedOption.length === 0){
            setErrorMessage("please select atleast one box");
            setPassword('');
            return;
        }

        selectedOption.forEach((option)=>{
            switch (option.title){
                case "Include Uppercase letter":
                    charSet +="ABCDEFGHIJKLMNOPQRSTWXYZ";
                    break;
                case "Include Lowercase letter":
                    charSet+="abcdefghijklmnopqrstwxyz";
                    break;
                case "Include Numbers":
                    charSet+="1234567890";
                    break;
                case "Include Symbols":
                    charSet+="!@#$%^&*()-+";
                    break;
                default:
                    break;     
            }
        });
        for (let i = 0; i < length; i++) {
            const index=Math.floor(Math.random()*charSet.length);
            finalpassword+=charSet[index];
        }
        setPassword(finalpassword);
        setErrorMessage("")
    }

    return {password, errorMessage, generatePassword};
}

export default usePasswordGenerator