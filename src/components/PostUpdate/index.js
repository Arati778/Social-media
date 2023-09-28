import React, { useState, useMemo } from "react";
import { postStatus, getStatus, updatePost } from "../Auth/FirestoreAPI";
import ModalComponent from "../modal";
import { uploadPostImage } from "../Auth/ImageUpload";
import { getUniqueID } from "../user/getUniqueId";
import PostsCard from "../PostsCard";
import { getCurrrentTimeStamp } from "../helpers/useMoment";
import "./index.scss";

export default function PostStatus({currentUser}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatus, setAllStatus] = useState([]);
  const sendStatus = async () => {
    let object = {
      status: status,
      timestamp: getCurrrentTimeStamp('LLL'),
      userEmail: currentUser.email,
      userName: currentUser.name,
      postID: getUniqueID(),
    }
    await postStatus(object);
    await setModalOpen(false);
  };


  useMemo(()=> {
    getStatus(setAllStatus);
  }, [])

  console.log(allStatus);
  return <div>
    <div className="post-status-main">
    <div className="post-status">
      <button className="open-post-modal" onClick={() => setModalOpen(true)} >Start a post</button>
    </div>
    <ModalComponent 
    setStatus={setStatus} 
    modalOpen={modalOpen} 
    setModalOpen={setModalOpen}
    status={status}
    sendStatus={sendStatus}
    />
    <div>
    {allStatus.map((posts) =>{
    return <PostsCard posts={posts}/>
    }
    )}
    </div>
    </div>
  </div>;
}
