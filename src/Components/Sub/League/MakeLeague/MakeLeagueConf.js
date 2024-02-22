import React, { useState } from "react";
import styles from "./MakeLeagueConf.module.css";
import ALNavBar from "../../../NavBar/ALNavBar";
import NavBar from "../../../NavBar/NavBar";
import CompanyInfo from "../../../Common/CompanyInfo";
import { Navigate, useNavigate } from "react-router-dom";


function MakeLeagueConf(){
    const [nickname, setNickname]= useState('');
    const isNickname = sessionStorage.getItem('nickname');
    const navigate = useNavigate();
    if (isNickname){
        setNickname(isNickname)
    }
    const gotoMain=()=>{
        navigate('/AL   MainPage')
    }
    return(
        <div className={styles.back1}>
            {nickname ? <ALNavBar/>:<NavBar/>}
            <div className={styles.back2}>
                <div className={styles.whitebord}>
                    <p className={styles.name1}>리그 생성하기</p>
                    <div className={styles.namebox}><p className={styles.name}>안녕</p><p className={styles.alert}>리그가 생성되었습니다.</p></div>
                    <div className={styles.select} onClick={gotoMain}>확인</div>
                </div>

            </div>
            <CompanyInfo/>
        </div>
    )
}
export default MakeLeagueConf;