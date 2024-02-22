import React from "react";
import styles from "./SelectDate.module.css";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Navigate, useNavigate } from "react-router-dom";
function SelectGetDate(props){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const navigate = useNavigate();
    const lastStep=()=>{
        navigate('/MakeLeagueConf');
    }
   
    return (
        <>
            <p className={styles.name1}>{props.name} 생성하기</p>
            <p className={styles.name2}>STEP 5. 리그에 대한 정보가 필요해요 !</p>
            <p className={styles.name3}>참여받는 기간을 선택해주세요.</p>
            <div className={styles.box}>
            <DatePicker 
                className={styles.date1}
                dateFormat="yyyy.MM.dd"
                selected={startDate}
                onChange={(date) => setStartDate(date)}/>
                -
            <DatePicker 
                className={styles.date2}
                dateFormat="yyyy.MM.dd"
                selected={endDate}
                endDate={endDate}
                onChange={(date) => setEndDate(date)}/>
            </div>
            <div className={styles.select} onClick={lastStep}>결정</div>
        </>
    )
}
export default SelectGetDate;