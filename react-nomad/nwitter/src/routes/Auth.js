import React, {useState} from 'react';
import {authService} from "../fbase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState('');
    const onChange = (event) => {
        const {
            target: {name, value},
        } = event;
        if(name === "email"){
            setEmail(value)
        }else if(name === "password"){
            setPassword(value)
        }
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            let data;
            if (newAccount) {
                //create account
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            }
            console.log(data)
        } catch (e) {
            setError(e.message)
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="email" placeholder="Email" value={email} onChange={onChange} required />
                {error}
                <input name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                <input type="submit" value={newAccount ? '계정 생성':'로그인'} />
            </form>
            <span onClick={toggleAccount}>{newAccount ? "sign in" : "create Account"}</span>

            <div>
                <button>구글로 로그인</button>
                <button>gitHub로 로그인</button>
            </div>
        </div>
    );
}
export default Auth;
