import React, { useEffect, useState } from 'react';
import { dbService, storageService } from "../fbase";
import { collection, addDoc, onSnapshot, query, orderBy, } from "firebase/firestore";
import Nweet from "../components/Nweet";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState('');
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");
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
    const onSubmit = async (event) => {
        event.preventDefault();
        let attachmentUrl = "";
        if (attachment !== "") {
            const attachmentRef = ref(storageService, `${userObj.uid}/${v4()}`);
            const response = await uploadString(attachmentRef, attachment, "data_url");
            attachmentUrl = await getDownloadURL(response.ref);
        }
        const nweetObj = {
            text: nweet,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl
        }
        addDoc(collection(dbService, 'nweets'), nweetObj)
        setNweet('');
        setAttachment('');
    };

    const onChange = (event) => {
        const { target: { value } } = event;
        setNweet(value)
    };
    const onFileChange = (event) => {
        const { target: { files } } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onload = (finishedEvent) => {
            const { currentTarget: { result } } = finishedEvent;
            setAttachment(result);
        }
        reader.readAsDataURL(theFile)
    };
    const onClearattachment = () => setAttachment(null)
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={nweet} placeholder="what's our mind" maxLength={120} />
                <input type="file" accept="image/*" onChange={onFileChange} />
                <input type="submit" value="Nweet" />
                {attachment &&
                    <div>
                        <img src={attachment} width="50px" height="50px" />
                        <button onClick={onClearattachment}>Clear</button>
                    </div>
                }
            </form>
            <div>
                {nweets.map((nweet) => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    )
}
export default Home;
