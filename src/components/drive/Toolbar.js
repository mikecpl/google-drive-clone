import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export default function Toolbar() {
  return (
    <div className="flex flex-row space-x-2">
      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3">
        <FontAwesomeIcon icon={faUpload} />
      </button>

      <button className="bg-white border text-blue-600 hover:text-blue-800 border-blue-600 hover:border-blue-800 rounded-md py-2 px-3">
        <FontAwesomeIcon icon={faFolderPlus} />
      </button>
    </div>
  )
}
