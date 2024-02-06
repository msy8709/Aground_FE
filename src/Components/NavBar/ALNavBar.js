import React from "react";
import Logo1 from "../../assets/Logo1.png";
import styles from "./ALNavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupModal from "../Signin/SignupModal";

function NavBar({username, src}){
    const navigate = useNavigate();
    
    const moveMain = () => {
        navigate("/")
    }
    const DoLogin = () => {
        navigate("/LoginPage")
    }
    
    return(
        <div className={styles.Back}>
            
            <img onClick={moveMain}className={styles.Logo} src={Logo1} alt="Logo1"/>
            <div className={styles.NavBar}>
                <p className={styles.tag}>리그 & 컵</p>
                <p className={styles.tag}>경기</p>
                <p className={styles.tag}>팀</p>
                <p className={styles.tag}>선수</p>
                <p className={styles.tag}>감독</p>
                <p className={styles.tag}>분석장비</p>
            </div>
            <div className={styles.box2}>
                <img className={styles.userimg} src={src}/>
                <p className={styles.username}>{username}</p>
            </div>
            
        </div>
    )
}
export default NavBar;