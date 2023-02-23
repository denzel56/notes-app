import AddButton from '../../components/AddButton';
import Modal from '../../components/Modal';

import { useSelector } from "react-redux";
import { modalStateSelector } from '../../store/modalSlice';
import { noteStateSelector } from '../../store/noteSlice';
import Note from '../../components/Note';

const MainPage = () => {
  const isModal = useSelector(modalStateSelector);
  const { noteData } = useSelector(noteStateSelector);


  return (
    <>
      <h1 className='text-center font-bold'>Hello type</h1>
      {
        noteData && <Note
          id={noteData.id}
          text={noteData.text}
          tags={noteData.tags}
        />
      }
      <AddButton />
      {
        isModal && <Modal />
      }
    </>
  )
}

export default MainPage;
