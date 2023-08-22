import React, { useState } from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { dbService, storageService } from "../fbase";

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const getNweetId = doc(dbService, `nweets/${nweetObj.id}`)
    const onDeleteClick = async () => {
        const ok = window.confirm('are you sure?');
        if (ok) {
            await deleteDoc(getNweetId);
            await deleteObject(ref(storageService, `/${nweetObj.attachmentUrl}`))
        }
    }
    const toggleEditing = () => setEditing((prev) => !prev);
    const onChange = (event) => {
        const { target: { value } } = event;
        setNewNweet(value);
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        await updateDoc(getNweetId, {
            text: newNweet
        });
        setEditing(false)
    }
    return (
        <div>
            {editing ? (
                <>
                    {isOwner && <>
                        <form onSubmit={onSubmit}>
                            <input type="text" onChange={onChange} placeholder="게시글을 수정하세요" value={newNweet} required />
                            <input type="submit" value="update" />
                        </form>
                        <button onClick={toggleEditing}>cancel</button>
                    </>
                    }
                </>
            ) : (
                <>
                    <h4>{nweetObj.text}</h4>
                    {nweetObj.attachmentUrl && (
                        <img src={nweetObj.attachmentUrl} width="50px;" height="50px" />
                    )}
                    {isOwner &&
                        <>
                            <button onClick={onDeleteClick}>delete</button>
                            <button onClick={toggleEditing}>edit</button>
                        </>
                    }
                </>
            )}
        </div>
    )
}


export default Nweet;
