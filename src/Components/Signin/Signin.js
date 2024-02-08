import React, { useState } from "react";
import styles from "./Signin.module.css";
import TextInput from "../Common/TextInput";
import SelectGender from "../Common/SelectGender";
import AgreeCheckbox from "../Common/AgreeCheckbox";
import { useEffect } from "react";
import client from "../../Clients";

function Signin({color,text,imgsrc}){
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [birth,setBirth] = useState('');
    const [gender, setGender] = useState('');
    const [marketingAgree, setMarketingAgree] = useState('');
    const [isNickname,setIsNickname] = useState(true);
    const [isName,setIsName] = useState(true);
    const [isBirth,setIsBirth] = useState(true);

    const isAllValid = isNickname && isName && isBirth;
    const saveNickname = event => {
        setNickname(event.target.value);
        setIsNickname(event.target.value.length > 2);
    }
    
    const saveName = event => {
        setName(event.target.value);
        setIsName(/^[가-힣a-zA-Z]{2,20}$/.test(name))
    }
    const saveBirth = event => {
        setBirth(event.target.value);
        setIsBirth(/^\d{8}$/.test(birth))
    }
    const saveGender = event => {
        setGender(event.target.value);
        console.log(gender);
    }
    const saveAgree = event => {
        setMarketingAgree(event.target.value);
        console.log(marketingAgree);
    }
    const onSubmitHandler = async event => {
        event.preventDefault();

        let SignUpData = {
            'user_birth' : birth,
            'user_name' : name,
            'user_gender' : gender,
            'user_nickname' : nickname,
            'marketing_agree' : marketingAgree

        }
        console.log(SignUpData);
        client.post('/api/login/signup/',SignUpData)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error);
        })
        const isdup = client.get('/api/login/signup/')
            
        
    }
    
        
    
    
  

    const sameBStyle = {
        border: `.2vh solid ${color}`,
    }
    const SigninBStyle = {
        backgroundColor: color,
    }
    

    return(
      <form onSubmit={onSubmitHandler}>
        <div className={styles.back}>
            <div className={styles.block1}>
                <img className={styles.icon} src={imgsrc}/>  
                {text}로 회원가입
            </div>
            <div className={styles.block0}>
                <div className={styles.block2}>
                    <div className={styles.name}>닉네임</div>
                    <input onChange={saveNickname}className={styles.input}type="text" placeholder="3~8자리 입력"></input>
                    {isNickname ? <div className={styles.checkdup2} >중복확인</div> : <div className={styles.checkdup} >중복확인</div>}
                </div>
                {isNickname ?(<p style={{color:"red"}}className={styles.errortext}>중복검사를 해주세요.</p>): (<p style={{color:"red"}}className={styles.errortext}>닉네임은 3글자 이상이어야 합니다.</p>)}
            </div>
            
            <TextInput isValid={isName} errortext="이름을 입력해주세요." correcttext=""onChange={saveName}text="이름" type="text" placeholder="실명 입력"/>
                    <TextInput isValid={isBirth}errortext="YYYYMMDD 형식으로 입력해주세요." correcttext="생년월일이 입력되었습니다."onChange={saveBirth}text="생년월일" type="text" placeholder="8자리 (YYYYMMDD)" maxLength={8} pattern="\d*" />
                    
                    <div >
                        <SelectGender setGender={setGender} onChange={saveGender} color="#055540"/>
                    </div>
                    
                    <AgreeCheckbox setMarketingAgree={setMarketingAgree}onChange={saveAgree}color="#055540"/>
                    {isAllValid ? <button style={SigninBStyle} type="submit"className={styles.submit}>가입하기</button> : <button type="button"className={styles.submit2}>가입하기</button>}
        </div>
      </form>
    )
}
export default Signin;