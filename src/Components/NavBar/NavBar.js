import React from "react";
import Logo1 from "../../assets/Logo1.png";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SignupModal from "../Signin/SignupModal";

function NavBar(){
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const ModalOpen=()=>{
        setIsOpen(true);
    }
    const ModalClose =() =>{
        setIsOpen(false);
    }
    const moveMain = () => {
        navigate("/")
    }
    const DoLogin = () => {
        navigate("/LoginPage")
    }
    
    return(
        <div className={styles.Back}>
            {isOpen &&(<div className={styles.compbox}><SignupModal ModalClose = {ModalClose}/></div>)}
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
                <div className={styles.Login} onClick={DoLogin}>로그인</div>
                <div className={styles.line}/>
                <div className={styles.Signin} onClick={ModalOpen}>회원가입</div>
                
            </div>
            
        </div>
    )
}
export default NavBar;