import React from 'react';
import { useParams } from 'react-router-dom';
import { useFolder } from '../hooks/useFolder';
import Breadcrumb from './drive/Breadcrumb';
import Folder from './drive/Folder';
import Toolbar from './drive/Toolbar';
import NavBar from './NavBar';

export default function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4">
          <Breadcrumb />
          <Toolbar />
        </div>

        {childFolders.length > 0 && (
          <div className="flex flex-row space-y-4">
            {childFolders.map((childFolder) => (
              <div key={childFolder.id}>
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
