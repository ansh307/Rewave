import React from "react";

const SocialModal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
    flex justify-center items-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[350px] flex flex-col">
        <button
          className="text-gray-700 text-xl hover:text-gray-900 place-self-end"
          onClick={() => onClose()}
        >
          &times;
        </button>
        <div className="bg-[#0c0929] rounded-md">{children}</div>
      </div>
    </div>
  );
};

export default SocialModal;
