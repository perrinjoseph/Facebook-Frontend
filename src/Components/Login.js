import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth , provider } from '../firebaseConfig'
import {useStateValue} from './StateProvider';

function Login() {
    
    const [state,dispatch]=useStateValue();

    const signIn = async function(e)
    {
        e.preventDefault();
        const {user} = await auth.signInWithPopup(provider)
        if(user){
            console.log(user)
            dispatch({
                user,
                type:"SET_USER"
            })
        };
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="Facebook logo">
                </img>
                
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" style={{height:"40px"}} alt="Facebook logo">
                </img>
            </div>
                <Button type ="submit" onClick={signIn}>CLICK ME</Button>
        </div>
    )
}

export default Login
