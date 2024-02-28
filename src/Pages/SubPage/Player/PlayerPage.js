import styles from "./PlayerPage.module.css";
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
import arrow from "../../../assets/Arrow.png";
import profile from "../../../assets/profile.png";
import client from "../../../Clients";

export default function PlayerPage(){
    const [nickname,setNickname] = useState();
    const [state, setState] = useState();
    const [color, setColor] = useState();
    const [code, setCode] = useState('')
    const [name, setName] = useState('');
    const [height,setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [point,setPoint] = useState('')
    const [area,setArea] = useState('');
    const [ position,setPosition] = useState('');
    const [description,setDescription] = useState('');
    const [goal,setGoal] = useState('');
    const [assist,setAssist] = useState('');
    const [foot, setFoot] = useState('');

    const navigate = useNavigate();

    const goRegion = () => {
        navigate('/TeamByRegionPage');
    }
    const makeLeague = () => {
        navigate('/MakeLeaguePage');
    }
    const RegionDetail = () => {
        navigate('/TeamByRegionPage');
    }
    useEffect(()=>{
        const isNickname = sessionStorage.getItem('nickname');
        if(isNickname){
            setNickname(isNickname)
        }
    },[])
    const stateSelect = (event) => {
        setState(event.target.value);
    }

    
    



    return(
        <div>
            {nickname ? <ALNavBar/> : <NavBar/>}
            <div className={styles.back}>
                <div className={styles.back1}>
                    <div className={styles.back2}>
                        <div className={styles.sortbox}>
                            <div className={styles.searchbox}><img src={dodbogi}/><input className={styles.search}type="text"/></div>
                            <select onClick={stateSelect}name="state" className={styles.sort}>
                                <option className={styles.sort}>포지션<img className={styles.dropicon}src={plus}/></option>
                                <option value="ST">ST</option>
                                <option value="LWF">LWF</option>
                                <option value="RWF">RWF</option>
                                <option value="LWM">LWM</option>
                                <option value="CAM">CAM</option>
                                <option value="RWM">RWM</option>
                                <option value="LM">LM</option>
                                <option value="CM">CM</option>
                                <option value="RM">RM</option>
                                <option value="LWB">LWB</option>
                                <option value="CDM">CDM</option>
                                <option value="RWB">RWB</option>
                                <option value="LB">LB</option>
                                <option value="CB">CB</option>
                                <option value="RB">RB</option>
                                <option value="GK">GK</option>
                            </select>
                        </div>
                        <div className={styles.contentbox}>
                            <div className={styles.leaguebox}>
                                <div className={styles.textgroup2}>
                                    <div className={styles.textgroup}>
                                        <p className={styles.text1}>선수</p>
                                        <p className={styles.text2}>전체</p>
                                    </div>
                                    <div className={styles.region} onClick={goRegion}>지역별 선수 ></div>
                                </div>
                                <div className={styles.tableArea}>
                                    <table className={styles.table}>
                                        <thead tr className={styles.thead}>
                                            <tr className={styles.tr}>
                                                <th className={styles.thead1}>성실 포인트</th>
                                                <th className={styles.thead2}>선수 이름</th>
                                                <th className={styles.thead3}>소속 팀</th>
                                                <th className={styles.thead4}>활동 지역</th>
                                                <th className={styles.thead5}>포지션</th>
                                                <th className={styles.thead6}>연령</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className={styles.tr2}>
                                                <td className={styles.td}>브론즈</td>
                                                <td className={styles.td}>인천 미추홀구 리그</td>
                                                <td className={styles.td}>일반 리그</td>
                                                <td className={styles.td}>12팀</td>
                                                <td className={styles.td1}>모집중</td>
                                                <td className={styles.td}>2024.08.30</td>
                                            </tr>    
                                        </tbody>
                                    </table>
                                </div>
                                <div className={styles.contentpages}><img src={arrow} className={styles.arrowl}/><p className={styles.pages}>1</p><img src={arrow} className={styles.arrow}/></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.teammember}>
                        <div className={styles.playerpro}>선수 프로필</div>
                            <div className={styles.contentbox1}><img className={styles.profile} src={profile}/>
                                <div className={styles.textbox0}>
                                    <div className={styles.FCname}>손흥민</div>
                                    <div className={styles.textbox}>
                                        <div className={styles.text}><p className={styles.text3}>키</p><p className={styles.text4}>187cm</p></div>
                                        <div className={styles.text}><p className={styles.text3}>몸무게</p><p className={styles.text4}>87kg</p></div>
                                        <div className={styles.text}><p className={styles.text3}>주발</p><p className={styles.text4}>5/5</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.aboutmem}>
                                <div className={styles.content}>
                                    <p className={styles.prefer}>선호 포지션</p>
                                    <div className={styles.positionbox}>
                                        <div className={styles.position}></div>
                                        <div className={styles.contentbox3}><p className={styles.about}>연령/성별</p><p className={styles.about}>등번호</p><p className={styles.about}>골</p><p className={styles.about}>어시스트</p><p className={styles.about}>출전경기</p><p className={styles.about}>경기참여율</p><p className={styles.about}>성실포인트</p></div>
                                        <div className={styles.contentbox4}><p className={styles.inform}>25/남</p><p className={styles.inform}>7</p><p className={styles.inform}>7</p><p className={styles.inform}>5</p><p className={styles.inform}>2</p><p className={styles.inform}>50%</p><p className={styles.inform}>150%</p></div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.career}>
                                <p className={styles.careertext}>클럽 경력</p>
                                <div className={styles.careerbox}><span className={styles.period}>2024.06.24</span><span className={styles.fc}>토트넘</span></div>
                                
                            </div>
                        </div>
                    </div>                   
                </div>        
                <CompanyInfo/>
            </div>
    
    )}