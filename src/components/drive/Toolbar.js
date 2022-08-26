import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import AddFolderModal from './AddFolderModal';
import { useFolder } from '../../hooks/useFolder';

export default function Toolbar() {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);
  const { folder } = useFolder();

  function openUploadFileModal() {

  }

  function openAddFolderModal() {
    setIsAddFolderModalOpen(true);
  }

  return (
    <div className="flex flex-row space-x-2">
      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3">
        <FontAwesomeIcon icon={faUpload} onClick={openUploadFileModal} />
      </button>

      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3">
        <FontAwesomeIcon icon={faFolderPlus} onClick={openAddFolderModal} />
      </button>

      <AddFolderModal open={isAddFolderModalOpen}
        setOpen={setIsAddFolderModalOpen}
        currentFolder={folder}
      />
    </div>
  )
}
