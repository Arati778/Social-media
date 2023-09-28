import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import { BsPencil, BsTrash } from "react-icons/bs";
import {
  getCurrentUser,
  getAllUsers,
  deletePost,
  getConnections,
} from "../Auth/FirestoreAPI";
import "./index.scss";

export default function PostsCard({ posts, id, getEditData }) {
    return <div className="posts-card">
        <p className="name">{posts.userName}</p>
        <p className="timestamp">{posts.timeStamp}</p>
        <p className="status">{posts.status}</p>
    </div>

}
