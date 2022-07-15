import React, {useEffect} from "react";
import './App.scss';
import Home from "../components/Pages/Home";
import {BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Login from "../components/Pages/Login";
import {ThemeContext, themes} from "../api/Theme";
import musicDB from "../db/music";
import {useDispatch, useSelector} from "react-redux";
import {setPlaylist} from "../actions/actions";
import LikeButton from "../components/fragment/LikeButton";
import SignIn from "../components/Pages/SignIn";
import SignUp from "../components/Pages/SignUp";


const App = () => {

    const {language} = useSelector(state => state.musicReducer);

    const dispatch = useDispatch();
    useEffect(()=>{
        if (language === null || language.includes("any")){
            dispatch(setPlaylist(musicDB))
        }
        else if (language.includes('hindi')){
            alert("No hindi tracks available")
        } else {
            let x = musicDB.filter((item)=>(
                item.lang && language.includes(item.lang.toLowerCase())
            ))
            dispatch(setPlaylist(x))
        }
    },[dispatch, language]);

    return (
        <ThemeContext.Provider value={themes.light}>
            <>
                <Router>
                    <Routes>
                        
                        <Route path="/" element={<Login/>}/>
                        <Route path="/login" element={<SignIn/>}/>
                        <Route path="/register" element={<SignUp/>}/>
                        <Route path="home/signout" element={<Navigate replace to="/" />} />
                        <Route path="/check" element={<Check/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/home/about" element={<Home />} />
                        <Route path="/home/search" element={<Home />} />
                        <Route path="/home/profile" element={<Home />} />
                        <Route path="/home/playlist" element={<Home />} />
                        <Route path="/home/playlist/instrumental" element={<Home />} />
                        <Route path="/home/playlist/electronic" element={<Home />} />
                    </Routes>
                </Router>
            </>
        </ThemeContext.Provider>
    );
}

function Check(){
    return(<>
        <LikeButton />
        </>
    );
}

export default App;

