import styles from "./GamePage.module.css"
import NavBar from "../../Components/NavBar/NavBar";
import CompanyInfo from "../../Components/Common/CompanyInfo";
import ALNavBar from "../../Components/NavBar/ALNavBar";
import { useState } from "react";
import { useEffect } from "react";
function GamePage(){
    const [nickname,setNickname] = useState();
    useEffect(()=>{
        const isNickname = sessionStorage.getItem('nickname');
        if(isNickname){
            setNickname(isNickname)
        }
    },[])
    return(
        <div>
            {nickname ? <ALNavBar/> : <NavBar/>}
            <CompanyInfo/>
        </div>
    )
}
export default GamePage;