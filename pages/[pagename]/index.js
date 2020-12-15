import React from 'react';
import {useRouter} from 'next/router';
import Home from '../index'
import About from '../aboutPage/about';
import Data from '../dataPage/data';
import SignUp from '../signUpPage/signUp';

const Dynamic = () => {
    const router = useRouter();
    const {pagename} = router.query;
    return (
        <div>
            {
                pagename === "home" ? <Home /> :
                pagename === "about" ? <About/> :
                pagename === "data" ? <Data /> :
                pagename === "signUp" ? <SignUp/> : null 
            }
        </div>
    );
};

export default Dynamic;