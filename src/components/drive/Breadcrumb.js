import React from 'react'
import { Link } from 'react-router-dom';
import { ROOT_FOLDER } from '../../hooks/useFolder'

export default function Breadcrumb({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER
    ? []
    : [ROOT_FOLDER];

  if (currentFolder) {
    path = [...path, ...currentFolder.path];
  }

  return (
    <div>
      {path.map((folder, index) => (
        <span className="text-gray-500" key={folder.id}>
          <Link className="text-blue-600 hover:text-black"
            to={folder.id ? `/folder/${folder.id}` : '/'}
            state={{
              folder: { ...folder, path: path.slice(1, index) }
            }}
          >
            {folder.name}
          </Link>
          {" / "}
        </span>
      ))}
      {currentFolder && (
        <span className="text-gray-500">
          {currentFolder.name}
        </span>
      )}
    </div>
  )
}
