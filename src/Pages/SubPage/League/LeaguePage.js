import styles from "./LeaguePage.module.css"
import NavBar from "../../../Components/NavBar/NavBar";
import CompanyInfo from "../../../Components/Common/CompanyInfo";
import ALNavBar from "../../../Components/NavBar/ALNavBar";
import { useState } from "react";
import { useEffect } from "react";
import League from "../../../Components/Sub/League/LeagueByRegion";
import dodbogi from "../../../assets/dodbogi.png";
import DropIcon from "../../../assets/DropIcon.png";
import side from "../../../assets/sideIcon.png";
import plus from "../../../assets/plusIcon.png";
import { useNavigate } from "react-router-dom";

function LeaguePage(){
    const [nickname,setNickname] = useState();
    const [state, setState] = useState();
    const [color, setColor] = useState();
    const navigate = useNavigate();

    const goRegion = () => {
        navigate('/LeagueByRegion');
    }
    const makeLeague = () => {
        navigate('/MakeLeaguePage');
    }
    const LeagueDetail = () => {
        navigate('/LeagueDetailPage');
    }
    useEffect(()=>{
        const isNickname = sessionStorage.getItem('nickname');
        if(isNickname){
            setNickname(isNickname)
        }
    },[])
    const stateSelect = (event) => {
        setState(event.target.value);
        if (event.target.value === "모집중"){
            setColor("#EAAA00")
        } else if(event.target.value === "진행중"){
            setColor("#055540")
        }else{
            setColor("#E41819")
        }
    }
    
    return(
        <div>
            {nickname ? <ALNavBar/> : <NavBar/>}
            {/* <League/> */}
            <div className={styles.back}>
                <div className={styles.othercontents}></div>
                <div className={styles.sortbox}>
                    <div className={styles.searchbox}><img src={dodbogi}/><input className={styles.search}type="text"/></div>
                    <select onClick={stateSelect}name="state" className={styles.sort}>
                        <option className={styles.sort}>리그 상태<img className={styles.dropicon}src={plus}/></option>
                        <option value="모집중">모집중</option>
                        <option value="진행중">진행중</option>
                        <option value="종료">종료</option>
                        </select>
                </div>
                <div className={styles.contentbox}>
                    <div className={styles.leaguebox}>
                        <div className={styles.textgroup2}>
                        <div className={styles.textgroup}>
                            <p className={styles.text1}>전체</p>
                            <p className={styles.text2}>리그 & 컵</p>
                        </div>
                        <div className={styles.region} onClick={goRegion}>지역리그<img className={styles.side}src={side}/></div>
                        </div>
                        <table className={styles.table}>
                            <thead tr className={styles.thead}>
                                <tr className={styles.tr}>
                                    <th className={styles.thead1}>평균 티어</th>
                                    <th className={styles.thead2}>리그</th>
                                    <th className={styles.thead3}>종류</th>
                                    <th className={styles.thead4}>참가팀 수</th>
                                    <th className={styles.thead5}>상태</th>
                                    <th className={styles.thead6}>시작일</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onClick={LeagueDetail}className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                <tr className={styles.tr2}>
                                    <td className={styles.td}>브론즈</td>
                                    <td className={styles.td}>인천 미추홀구 리그</td>
                                    <td className={styles.td}>일반 리그</td>
                                    <td className={styles.td}>12팀</td>
                                    <td style={{color:color}}className={styles.td1}>모집중</td>
                                    <td className={styles.td}>2024.08.30</td>
                                </tr>
                                
                            </tbody>
                        </table>
                        
                       </div>
                       <div className={styles.makeLeague} onClick={makeLeague}><img className={styles.plus}src={plus}/>리그 만들기</div>
                </div>
            </div>
            <CompanyInfo/>
        </div>
    )
}
export default LeaguePage;