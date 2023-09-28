import React from "react";
import { Modal, Button } from "antd";
import { AiOutlinePicture } from "react-icons/ai";
import ReactQuill from "react-quill";
import "./index.scss";

const ModalComponent = ({modalOpen, setModalOpen, sendStatus, setStatus, status}) => {
  return (
    <>
      <Modal
        title="Create a post"
        style={{ top: 20 }}
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button 
          onClick={sendStatus}
          key="submit" 
          type="primary">
            Post
          </Button>,
        ]}
      >
        <input
        className="modal-input"
         placeholder="Display your project"
         onChange={(event)=> setStatus(event.target.value)}
         value={status}
         />

      </Modal>
    </>
  );
};

export default ModalComponent;