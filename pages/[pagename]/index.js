import React from 'react';
import {useRouter} from 'next/router';
import Home from '../index'
import About from '../aboutPage/about';
import Data from '../dataPage/data';
import SignUp from '../signUpPage/signUp';

const about = "about";
const data = "data";
const signUp = "signUp";
// const indexName = [
//     {
//         pageName : "home",
//         title: "homeTitle"

//     },
//     {
//         pageName : "about",
//         title : "aboutTitle"
//     },
//     {
//         pageName : "data",
//         title : "dataTitle"
//     },
//     {
//         pageName : "signUp",
//         title : "signUpTitle"
//     }
// ]

const Dynamic = () => {
    const router = useRouter();
    const {pagename} = router.query;
    return (
        <div>
            {
                pagename === "home" ? <Home /> :
                pagename === about ? <About title={about} /> :
                pagename === data ? <Data title={data} /> :
                pagename === signUp ? <SignUp title={signUp} /> : null 
            }
        </div>
    );
};

export default Dynamic;