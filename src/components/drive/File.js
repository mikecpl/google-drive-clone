import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function File({ file }) {
  return (
    <a href={file.url} target="_blank" rel="noreferrer" className="flex flex-col justify-center items-center space-x-2 border w-32 break-all text-blue-600 hover:text-white hover:bg-blue-600 border-blue-600 rounded-md px-4 py-2">
      <FontAwesomeIcon icon={faFile} size="2xl" />
      <span>
        {file.name}
      </span>
    </a>
  )
}
