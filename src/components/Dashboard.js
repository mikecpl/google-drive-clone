import React from 'react';
import Breadcrumb from './drive/Breadcrumb';
import Toolbar from './drive/Toolbar';
import NavBar from './NavBar';

export default function Dashboard() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between py-4">
          <Breadcrumb />
          <Toolbar />
        </div>
      </div>
    </>
  )
}
