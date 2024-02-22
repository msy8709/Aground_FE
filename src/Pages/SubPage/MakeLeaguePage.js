import { useState,useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import ALNavBar from "../../Components/NavBar/ALNavBar";
import CompanyInfo from "../../Components/Common/CompanyInfo";
import SearchLeague from "../../Components/Common/SearchLeague";
import styles from "./MakeLeaguePage.module.css";
import SelectType from "../../Components/Sub/League/MakeLeague/SelectType";
import SelectName from "../../Components/Sub/League/MakeLeague/SelectName";
import SelectRegion from "../../Components/Sub/League/MakeLeague/SelectRegion";
import arrow2 from "../../../src/assets/arrow2.png";
import SelectDate from "../../Components/Sub/League/MakeLeague/SelectDate";
import SelectGetDate from "../../Components/Sub/League/MakeLeague/SelectGetDate";
function MakeLeaguePage(){
    const [nickname, setNickname] = useState('');
    const [isClicked,setIsClicked] = useState(false);
    const[step,setStep] = useState(1);
    useEffect(()=>{
        const isNickname = sessionStorage.getItem('nickname');
        if(isNickname){
            setNickname(isNickname)
        }
    },[])
    const handleStep1 = () => {
        setStep(1)
    }
    const handleStep2=()=>{
        setStep(2);
    }
    const handleStep3=()=>{
        setStep(3);
    }
    const handleStep4=()=>{
        setStep(4);
    }
    const handleStep5=()=>{
        setStep(5);
    }
    

    return (
        <div className={styles.back1}>
            {nickname ? <ALNavBar/>:<NavBar/>}
            <div className={styles.back2}>
                <SearchLeague/> 
                <div className={styles.whitebord}>
                    {step === 1 ?<SelectType />:
                    step === 2 ? <SelectName />:
                    step === 3 ? <SelectRegion/>:
                    step === 4 ? <SelectDate/>:
                    step === 5 ? <SelectGetDate/>:''
                    }
                    <p className={styles.inform}><img className={styles.arrow}src={arrow2}/>리그정보를 수정하고 싶다면 돌아가고싶은 단계를 누르세요.</p>
                    <div className={styles.numselect}>
                        <div onClick={handleStep1} className={`${step===1?styles.num1:styles.num2}`}>1</div>
                        <div onClick={handleStep2} className={`${step===2?styles.num1:styles.num2}`}>2</div>
                        <div onClick={handleStep3} className={`${step===3?styles.num1:styles.num2}`}>3</div>
                        <div onClick={handleStep4} className={`${step===4?styles.num1:styles.num2}`}>4</div>
                        <div onClick={handleStep5} className={`${step===5?styles.num1:styles.num2}`}>5</div>
                    </div>

                </div>

            </div>
            <CompanyInfo/>
        </div>
    )
}
export default MakeLeaguePage;