import React, {useState} from 'react';
import {getDownloadURL, ref, uploadString} from "firebase/storage";
import {dbService, storageService} from "../fbase";
import {v4} from "uuid";
import {addDoc, collection} from "firebase/firestore";
const NweetFactory = ({userObj}) => {
    const [nweet, setNweet] = useState('');
    const [attachment, setAttachment] = useState("");

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
    );
};

export default NweetFactory;