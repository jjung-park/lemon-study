import React, {useEffect, useState} from 'react';
import {dbService} from "../fbase";
import { collection, addDoc, getDocs, onSnapshot, query, orderBy, } from "firebase/firestore";
import Nweet from "../components/Nweet";

const Home = ( {userObj}) => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);
    //구식
    /*const getNweets = async () => {
        const dbNweets = await getDocs(collection(dbService, 'nweets'));
        dbNweets.forEach((doc) => {
            const nweetObj = {
                ...doc.data(),
                id:doc.id
            }
            setNweets((prev) => [nweetObj, ...prev])
        });
    }*/

    useEffect(() => {
        // getNweets(); //구식
        // 신식
        const q = query(
            collection(dbService, "nweets"),
            orderBy("createdAt", "desc")
        );
        onSnapshot(q, (snapshot) => {
            const nweetArr = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(nweetArr);
            console.log(nweetArr)
        });
    }, [])
    const onSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(dbService, 'nweets'), {
            text:nweet,
            createdAt:Date.now(),
            creatorId:userObj.uid
        })
        setNweet('')
    }
    const onChange = (event) => {
        const {target:{value}} = event;
        setNweet(value)
    }
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={nweet} placeholder="what's our mind" maxLength={120}/>
            <input type="submit" value="Nweet"/>
        </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                    ))}
            </div>
    </div>
    )}
export default Home;
