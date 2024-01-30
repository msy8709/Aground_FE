import React from "react";
import styles from "./MainSection1.module.css";
import { useNavigate } from "react-router-dom";
import MainSection from "../../assets/MainSection1.png";
function MainSection1(){
    const navigate = useNavigate();
    
    const Subscribe = () => {
        navigate("/MainPage")
    }
    const rankpage = () => {
        navigate("/Loginpage")
    }
    return(
        <div className={styles.Block1}>
            <div className={styles.textgroup}>
                <p className={styles.text1}>AGROUNDS</p>
                <p className={styles.text2}>당신이 원한</p>
                <p className={styles.text3}><span className={styles.text7}>아마추어</span> 축구 플랫폼</p>
                <p className={styles.text4}>AGROUNDS는 아마추어 축구인을 위해 <br/>
                모든 경기가 재밌는 경기가 되도록 노력하는 <br/>
                축구인들을 위한 플랫폼입니다.</p>
            </div>
            <div className={styles.rankgroup} onClick={rankpage}>
                <p className={styles.text5}>LIVE</p>
                <p className={styles.text6}>2024-1 인하대 공대스리가</p>
                <p>2024.3.24.(토) 20:30 인하대학교 운동장</p>
            </div>
        </div>
    )
}
export default MainSection1;