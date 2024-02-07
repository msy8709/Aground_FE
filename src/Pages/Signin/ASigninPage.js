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
 
    const signup = () => {
        let user_info = {
            'user_id' : 'jayou1223@gmail.com',
            'user_pw' : '1q2w3e4r!',
            'user_birth' : '20011223',
            'user_name' : '구자유',
            'user_gender' : 'male',
            'user_nickname' : 'jayou',
            'marketing_agree' : true
        }

        client.post('/api/login/signup/', user_info).then(function(res) {
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
    }

    const login = () => {
        let user_info = {
            'user_id' : 'jayou1223@gmail.com',
            'user_pw' : '1q2w3e4r!'
        }

        client.post('/api/login/login/', user_info).then(function(res) {
            console.log(res);
        }).catch(function(err) {
            console.log(err);
        });
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
                    <TextInput changeFunction={setEmail} text="아이디" type="email" placeholder="(이메일)"/>
                    <TextInput changeFunction={setPassword} text="비밀번호" type="password" placeholder="비밀번호"/>
                    <TextInput changeFunction={setConfpassword} text="비밀번호 확인" type="password" placeholder="비밀번호 확인"/>
                    <div className={styles.block2}>
                        <div className={styles.name}>닉네임</div>
                        <input onChange={saveNickname} className={styles.input}type="text" placeholder="닉네임"></input>
                        <div className={styles.checkdup} >중복확인</div>
                    </div>
                    
                    <TextInput changeFunction={setName} text="이름" type="text" placeholder="실명"/>
                    <TextInput changeFunction={setBirth} text="생년월일" type="text" placeholder="8자리 (YYYYMMDD)" maxLength={8} pattern="\d*" />
                    
                    <div>
                        <SelectGender changeFunction={setGender} color="#055540"/>
                    </div>
                    
                    <AgreeCheckbox changeFunction={setAgree} color="#055540"/>
                    <button type="button"className={styles.submit} onClick={login}>가입하기</button>
                </div>
            </form>
            <CompanyInfo/>
        </div>
    )
}
export default SigninPage;