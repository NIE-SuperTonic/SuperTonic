import React, {useContext} from "react";
import '../assets/scss/DropDownProfile.scss';
import {ThemeContext} from "../../api/Theme";
import HoverButton from "./HoverButton";
import {AccountBox} from "@material-ui/icons";
import { auth } from '../Pages/firebase';
import { signOut } from 'firebase/auth';

const DropDownProfile = () => {
    const useStyle = useContext(ThemeContext);
    return (
        <div style={useStyle.component} className="dropdown-profile">
            <HoverButton Icon={AccountBox} variant={"text"} text={"Profile"}/>
            {<HoverButton Icon={AccountBox} variant={"text"} text={"SignOut"} onClick={()=>signOut(auth)}/>}
        </div>
    );
}
export default DropDownProfile;