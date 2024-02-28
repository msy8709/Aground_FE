import React from "react";
import styles from "./SelectDate.module.css";
import { useState,useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function SelectDate(props){
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    
    const [isClicked,setIsClicked] = useState(false)
    
    useEffect(()=>{
        {startDate < endDate?setIsClicked(true):setIsClicked(false)}
    },[startDate,endDate])
   
    return (
        <>
            <p className={styles.name1}>{props.name} 리그 생성하기</p>
            <p className={styles.name2}>STEP 5. 리그 진행 기간을 선택해주세요.</p>
            
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
            {isClicked?<div onClick={props.handleStep}className={styles.select}>다음</div>:<div className={styles.select}>다음</div>}
        </>
    )
}
export default SelectDate;