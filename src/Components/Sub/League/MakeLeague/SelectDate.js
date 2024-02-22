import React from "react";
import styles from "./SelectDate.module.css";
import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function SelectDate(props){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
   
    return (
        <>
            <p className={styles.name1}>{props.name} 생성하기</p>
            <p className={styles.name2}>STEP 4. 리그에 대한 정보가 필요해요 !</p>
            <p className={styles.name3}>시즌 시작일과 종료일을 선택해주세요.</p>
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
            <div className={styles.select}>결정</div>
        </>
    )
}
export default SelectDate;