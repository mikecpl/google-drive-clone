import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFolder } from '../hooks/useFolder';
import Breadcrumb from './drive/Breadcrumb';
import Folder from './drive/Folder';
import Toolbar from './drive/Toolbar';
import NavBar from './NavBar';

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId, state?.folder);

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4">
          <Breadcrumb currentFolder={folder} />
          <Toolbar currentFolder={folder} />
        </div>

        {childFolders.length > 0 && (
          <div className="flex flex-row space-x-4">
            {childFolders.map((childFolder) => (
              <Folder folder={childFolder} key={childFolder.id} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
