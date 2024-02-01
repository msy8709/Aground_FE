import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import CompanyInfo from "../../Components/Common/CompanyInfo";
import Logo from "../../assets/Logo1.png";
import styles from "./ASigninPage.module.css";
import TextInput from "../../Components/Common/TextInput";
import { useState } from "react";
import SelectGender from "../../Components/Common/SelectGender";
import AgreeCheckbox from "../../Components/Common/AgreeCheckbox";
import client from "../../Clients";

function SigninPage(){
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        let value = event.target.value;
        if (value.length > 8) {
          value = value.slice(0, 8);
        }
        setInputValue(value);
      };
    
    const handleSubmit = (event)=>{
        event.prevent.default();
    }

    
  const onClick = async () => {
    client.get("api/assist/random-number/")
    .then(response =>{
        console.log(response.data.number);
    })
    .catch(error=>{
        console.log(error);
    })
  };
    return(
        <div className={styles.backg}>
            <NavBar/>
            <form onSubmit={handleSubmit}>
                <div className={styles.back}>
                    <div className={styles.block1}>
                        <img className={styles.icon} src={Logo}/>  
                        AGROUNDS로 회원가입
                    </div>
                    <TextInput text="아이디" type="email" placeholder="(이메일)"/>
                    <TextInput text="비밀번호" type="password" placeholder="비밀번호"/>
                    <TextInput text="비밀번호 확인" type="password" placeholder="비밀번호 확인"/>
                    <div className={styles.block2}>
                        <div className={styles.name}>닉네임</div>
                        <input className={styles.input}type="text" placeholder="닉네임"></input>
                        <div className={styles.checkdup} >중복확인</div>
                    </div>
                    
                    <TextInput text="이름" type="text" placeholder="실명"/>
                    <TextInput text="생년월일" type="text" placeholder="8자리 (YYYYMMDD)" maxLength={8} pattern="\d*" onChange={handleInputChange}/>
                    
                    <div >
                        <SelectGender color="#055540"/>
                    </div>
                    
                    <AgreeCheckbox color="#055540"/>
                    <button type="submit"className={styles.submit}>가입하기</button>
                </div>
            </form>
            <CompanyInfo/>
        </div>
    )
}
export default SigninPage;