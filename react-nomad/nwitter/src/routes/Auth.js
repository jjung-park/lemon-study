import React, { useState } from 'react';
import { authService } from "../fbase";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import AuthForm from "../components/AuthForm";

const Auth = () => {

    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === 'google') {
            provider = new GoogleAuthProvider();
        } else if (name === 'github') {
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(authService, provider)
    }
    return (
        <div>
            <AuthForm/>
            <div>
                <button name="google" onClick={onSocialClick}>구글로 로그인</button>
                <button name="github" onClick={onSocialClick}>gitHub로 로그인</button>
            </div>
        </div>
    );
}
export default Auth;
