import React from 'react';
import AddButton from './components/AddButton';
import Modal from './components/Modal';

import { useSelector } from "react-redux";
import { modalStateSelector } from './store/modalSlice';

function App() {
  const isModal = useSelector(modalStateSelector);

  return (
    <>
      <h1 className='text-center font-bold'>Hello type</h1>
      <AddButton />
      {
        isModal && <Modal />
      }
    </>
  );
}

export default App;
