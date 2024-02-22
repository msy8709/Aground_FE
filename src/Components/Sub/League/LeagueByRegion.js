import { useState } from "react";
import React from "react";
import styles from "./LeagueByRegion.module.css";
import CenterMode from "../CenterSlider";
import SearchLeague from "../../Common/SearchLeague";
import { useNavigate } from "react-router-dom";
function League(){
    const navigate = useNavigate();
    const make =()=>{
        navigate('/MakeLeaguePage')
    }
    return (
        <div className={styles.back}>
            <SearchLeague/>
            <CenterMode/>
            <div className={styles.backbox2}><div className={styles.makeleague} onClick={make}>리그생성하기</div></div>
        </div>
    )
}
export default League;