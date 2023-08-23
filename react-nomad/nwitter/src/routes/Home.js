import React, { useEffect, useState } from 'react';
import { dbService, storageService } from "../fbase";
import { collection, addDoc, onSnapshot, query, orderBy, } from "firebase/firestore";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";

const Home = ({ userObj }) => {
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
        });
    }, [])

    return (
        <div>
            <NweetFactory userObj={userObj}/>

            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    )
}
export default Home;
