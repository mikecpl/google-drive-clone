import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import AddFolderModal from './AddFolderModal';

export default function Toolbar({ currentFolder }) {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);

  function openUploadFileModal() {

  }

  function openAddFolderModal() {
    setIsAddFolderModalOpen(true);
  }

  return (
    <div className="flex flex-row space-x-2">
      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3"
        onClick={openUploadFileModal}
      >
        <FontAwesomeIcon icon={faUpload} />
      </button>

      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3"
        onClick={openAddFolderModal}
      >
        <FontAwesomeIcon icon={faFolderPlus} />
      </button>

      <AddFolderModal open={isAddFolderModalOpen}
        setOpen={setIsAddFolderModalOpen}
        currentFolder={currentFolder}
      />
    </div>
  )
}
