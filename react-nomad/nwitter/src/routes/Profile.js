import { authService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { dbService } from "../fbase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";

export default ({ userObj, refreshUser }) => {
    const history = useHistory();
    const [newDisplayNm, setNewDisplayNm] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push('/')
    };

    const getMyNweets = async () => {
        const nweets = query(
            collection(dbService, "nweets"),
            where("creatorId", "==", userObj.uid)
        );
        const querySnapshot = await getDocs(nweets);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };
    useEffect(() => {
        getMyNweets()
    }, []);

    const onChange = (event) => {
        const { target: { value } } = event;
        setNewDisplayNm(value)
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayNm) {
            await updateProfile(authService.currentUser, {
                displayName: newDisplayNm
            })
            refreshUser();
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="display name" value={newDisplayNm} onChange={onChange} />
                <input type="submit" value="프로필 수정" />
            </form>
            <button onClick={onLogOutClick}>로그아웃</button>
        </>
    )
}
