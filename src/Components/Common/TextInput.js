import React from "react";
import styles from "./TextInput.module.css";
function TextInput({text, type, placeholder, errortext,color}){
    const handleInputChange=(event)=>{
        const inputValue = event.target.value;
        console.log(inputValue);
    }
    return(
        <div className={styles.block1}>
            <div className={styles.block2}>
                    <div className={styles.name}>{text}</div>
                    <input className={styles.input}type={type} onChange={handleInputChange}placeholder={placeholder}></input>
            </div>
            <p style={{color:color}}className={styles.errortext}>{errortext}</p>
        </div>
    )
}
export default TextInput;