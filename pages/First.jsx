import React from 'react';
import Header from '../components/Header';
import NotesSidebar from '../components/NotesSidebar';
import { Outlet } from 'react-router-dom';

function First() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <NotesSidebar />
        <div style={{ flex: 1, padding: '16px' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default First;