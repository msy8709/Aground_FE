import React, { useState } from "react";
import styles from "./Signin.module.css";
import TextInput from "../Common/TextInput";
import SelectGender from "../Common/SelectGender";
import AgreeCheckbox from "../Common/AgreeCheckbox";


function Signin({color,text,imgsrc}){
  
  const [inputValue, setInputValue] = useState('');
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [birth,setBirth] = useState('');
  const [gender, setGender] = useState('');
  const [agree, setAgree] = useState('');
  
  const saveNickname = event => {
      setNickname(event.target.value);
      console.log(nickname)
  }
  const saveName = event => {
      setName(event.target.value);
  }
  const saveBirth = event => {
      setBirth(event.target.value);
  }
  const saveGender = event => {
      setGender(event.target.value);
  }
  const saveAgree = event => {
      setAgree(event.target.value);
  }
  
  

    const sameBStyle = {
        border: `.2vh solid ${color}`,
    }
    const SigninBStyle = {
        backgroundColor: color,
    }
    
    return(
      <form>
        <div className={styles.back}>
            <div className={styles.block1}>
                <img className={styles.icon} src={imgsrc}/>  
                {text}로 회원가입
            </div>
            <div className={styles.block0}>
              <div className={styles.block2}>
                  <div className={styles.name}>닉네임</div>
                  <input onChange={saveNickname}className={styles.input}type="text" placeholder="닉네임"></input>
                  <div className={styles.checkdup} style={sameBStyle}>중복확인</div>
              </div>
              <p style={{color:"red"}}className={styles.errortext}>중복된 닉네임입니다.</p>
            </div>
            
            <TextInput errortext="이름은 필수 입력 정보 입니다." color="red" onChange={saveName}text="이름" type="text" placeholder="실명"/> 
            <TextInput errortext="YYYYMMDD 입력 형식을 확인해주세요."color="red"onChange={saveBirth}text="생년월일" type="text" placeholder="8자리 (YYYYMMDD)" maxLength={8} pattern="\d*"/>
            
            <div >
                <SelectGender onChange={saveGender}color={color}/>
            </div>
            
            <AgreeCheckbox onChange={saveAgree}color={color}/>
            <button style={SigninBStyle} className={styles.submit}>가입하기</button>
        </div>
      </form>
    )
}
export default Signin;