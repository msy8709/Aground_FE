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
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confpassword,setConfpassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [birth,setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [agree, setAgree] = useState('');
    
    
    const saveEmail = event => {
        setEmail(event.target.value);
        console.log(email)
    }
    const savePassword = event => {
        setPassword(event.target.value);
        console.log(setPassword)
    }
    const saveConfpassword = event => {
        setConfpassword(event.target.value);
    }
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
 



    
  
    return(
        <div className={styles.backg}>
            <NavBar/>
            <form >
                <div className={styles.back}>
                    <div className={styles.block1}>
                        <img className={styles.icon} src={Logo}/>  
                        AGROUNDS로 회원가입
                    </div>
                    <TextInput onChange={saveEmail}text="아이디" type="email" placeholder="(이메일)"/>
                    <TextInput onChange={savePassword}text="비밀번호" type="password" placeholder="비밀번호"/>
                    <TextInput onChange={saveConfpassword}text="비밀번호 확인" type="password" placeholder="비밀번호 확인"/>
                    <div className={styles.block2}>
                        <div className={styles.name}>닉네임</div>
                        <input onChange={saveNickname}className={styles.input}type="text" placeholder="닉네임"></input>
                        <div className={styles.checkdup} >중복확인</div>
                    </div>
                    
                    <TextInput onChange={saveName}text="이름" type="text" placeholder="실명"/>
                    <TextInput onChange={saveBirth}text="생년월일" type="text" placeholder="8자리 (YYYYMMDD)" maxLength={8} pattern="\d*" />
                    
                    <div >
                        <SelectGender onChange={saveGender}color="#055540"/>
                    </div>
                    
                    <AgreeCheckbox onChange={saveAgree}color="#055540"/>
                    <button type="submit"className={styles.submit}>가입하기</button>
                </div>
            </form>
            <CompanyInfo/>
        </div>
    )
}
export default SigninPage;