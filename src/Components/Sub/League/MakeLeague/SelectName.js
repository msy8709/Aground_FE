import React from "react";
import styles from "./SelectName.module.css";
function SelectName(props){
    return (
        <>
            <p className={styles.name1}>{props.name} 생성하기</p>
            <p className={styles.name2}>STEP 2. 리그에 대한 정보가 필요해요 !</p>
            <p className={styles.name3}>리그 이름을 적어주세요.</p>
            <div className={styles.box}><input className={styles.input} types='text' placeholder="생성하는 리그의 이름을 적어주세요"/></div>
            <div className={styles.select}>결정</div>
            
        </>
    )
}
export default SelectName;