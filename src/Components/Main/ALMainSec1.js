import styles from "./ALMainSec1.module.css";
import MainSection3_1 from "../../assets/MainSection3_1.png"
import ALMainSec1_1 from "../../assets/ALMainSec1_1.png"
import MainSection3_2 from "../../assets/MainSection3_2.png"
import MainSection3_3 from "../../assets/MainSection3_3.png"
import { useNavigate } from "react-router-dom";
function ALMainSec1(){
    const navigate = useNavigate;
    const rankpage = () => {
        navigate("/Loginpage")
    }
    return (
        <div className={styles.back}>
            <div className={styles.boxgroup}>
                    <div className={styles.box1}>
                        <div className={styles.inbox1}><img className={styles.img}src={MainSection3_1}/></div>
                        <div className={styles.inbox4}><p className={styles.text}>리그 & 컵</p><p className={styles.conf1}>확인 &gt;</p></div>
                    </div>
                    <div className={styles.box1}>
                        <div  className={styles.inbox5}><img className={styles.img}src={ALMainSec1_1}/></div>
                        <div  className={styles.inbox4}><p className={styles.text}>경기</p><p className={styles.conf1}>확인 &gt;</p></div>
                    </div>
                    <div className={styles.box1}>
                        <div  className={styles.inbox3}><img className={styles.img}src={MainSection3_3}/></div>
                        <div  className={styles.inbox4}><p className={styles.text}>선수</p><p className={styles.conf1}>확인 &gt;</p></div>
                    </div>
                    <div className={styles.box1}>
                        <div  className={styles.inbox2}><img className={styles.img}src={MainSection3_2}/></div>
                        <div  className={styles.inbox4}><p className={styles.text}>팀</p><p className={styles.conf1}>확인 &gt;</p></div>
                    </div>
                </div>
                <div className={styles.rankgroup} onClick={rankpage}>
                <p className={styles.text5}>LIVE</p>
                <p className={styles.text6}>2024-1 인하대 공대스리가</p>
                <p>2024.3.24.(토) 20:30 인하대학교 운동장</p>
            </div>
        </div>
    )
}
export default ALMainSec1;
