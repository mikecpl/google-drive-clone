import { faFolderBlank } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Folder({ folder }) {
  return (
    <Link className="flex flex-row items-center space-x-2 border text-blue-600 hover:text-white hover:bg-blue-600 border-blue-600 rounded-md px-4 py-2"
      to={`/folder/${folder.id}`}
      state={{
        folder
      }}
    >
      <FontAwesomeIcon icon={faFolderBlank} />
      <span>
        {folder.name}
      </span>
    </Link>
  )
}
