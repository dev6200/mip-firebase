import { Modal } from "antd";

type AddSongModalProps = {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const AddSongModal = ({ handleCancel, handleOk, open }: AddSongModalProps) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        open={open}
        onClose={handleOk}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export { AddSongModal };
