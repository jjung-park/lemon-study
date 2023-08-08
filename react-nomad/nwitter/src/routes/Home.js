import React, {useEffect, useState} from 'react';
import {dbService} from "../fbase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const Home = () => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);
    const getNweets = async () => {
        const dbNweets = await getDocs(collection(dbService, 'nweets'));
        dbNweets.forEach((doc) => {
            const nweetObj = {
                ...doc.data(),
                id:doc.id
            }
            setNweets((prev) => [nweetObj, ...prev])
        });
    }
    useEffect(() => {
        getNweets();
    }, [])
    const onSubmit = (event) => {
        event.preventDefault();
        addDoc(collection(dbService, 'nweets'), {
            nweet,
            createdAt:Date.now()
        })
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
                {nweets.map((nweet) =>(
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>))}
            </div>
    </div>
    )}
export default Home;
