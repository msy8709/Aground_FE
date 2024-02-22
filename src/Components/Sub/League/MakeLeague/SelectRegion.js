import React from "react";
import styles from "./SelectRegion.module.css";
import { useState } from "react";
function SelectRegion(props){
    const [selectregion, setSelectregion] = useState('지역선택');
    const handleChange = (event) => {
        setSelectregion(event.target.value)
    }
    return (
        <>
            <p className={styles.name1}>{props.name} 생성하기</p>
            <p className={styles.name2}>STEP 3. 리그에 대한 정보가 필요해요 !</p>
            <p className={styles.name3}>리그 지역을 설정해주세요.</p>
            <select className={styles.selectbox}value='option' onChange={handleChange}>
                <option value="지역선택">{selectregion}</option>
                <option value="서울특별시">서울특별시</option>
                <option value="부산광역시">부산광역시</option>
                <option value="인천광역시">인천광역시</option>
                <option value="대전광역시">대전광역시</option>
                <option value="대구광역시">대구광역시</option>
                <option value="울산광역시">울산광역시</option>
                <option value="광주광역시">광주광역시</option>
                <option value="경기도">경기도</option>
                <option value="강원도">강원도</option>
                <option value="충청북도">충청북도</option>
                <option value="충청남도">충청남도</option>
                <option value="경상북도">경상북도</option>
                <option value="경상남도">경상남도</option>
                <option value="전라북도">전라북도</option>
                <option value="전라남도">전라남도</option>
                <option value="세종특별자치도">세종특별자치도</option>
                <option value="제주특별자치도">제주특별자치도</option>

            </select>
            
      
    
            
        </>
    )
}
export default SelectRegion;