import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import AddFolderModal from './AddFolderModal';
import { database, storage } from '../../firebase';
import useAuth from '../../hooks/useAuth';
import { ROOT_FOLDER } from '../../hooks/useFolder';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, serverTimestamp } from 'firebase/firestore';

export default function Toolbar({ currentFolder }) {
  const [isAddFolderModalOpen, setIsAddFolderModalOpen] = useState(false);
  const { user } = useAuth();

  function handleUploadFile(e) {
    const file = e.target.files[0];

    if (currentFolder === null || file === null) {
      return;
    }

    const path = currentFolder.path.map(item => item.name).join('/');
    const filePath = currentFolder === ROOT_FOLDER
      ? `${path}/${file.name}`
      : `${path}/${currentFolder.name}/${file.name}`;

    const fileRef = ref(storage, `/files/${user.uid}/${filePath}`);

    const uploadTask = uploadBytesResumable(fileRef, file);
    uploadTask.on('state_changed',
      snapshot => { },
      error => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          addDoc(database.files, {
            name: file.name,
            url,
            userId: user.uid,
            folderId: currentFolder.id,
            createdAt: serverTimestamp()
          });
        });
      }
    );
  }

  function openAddFolderModal() {
    setIsAddFolderModalOpen(true);
  }

  return (
    <div className="flex flex-row space-x-2">
      <label className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3 cursor-pointer">
        <FontAwesomeIcon icon={faUpload} />
        <input type="file" onChange={handleUploadFile} className="hidden" />
      </label>

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
