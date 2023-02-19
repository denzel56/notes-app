import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalState } from "../../store/modalSlice";
import { noteState } from "../../store/noteSlice";
import { INote } from "../../models/models";

const Modal = ({ }) => {
  const [noteText, setNoteText] = useState('')
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNoteText(prevState => e.target.value);
  }

  const handleClickSave = () => {
    dispatch(modalState());
    dispatch(noteState({

    }))
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 "
      >
        <div className="box-border mx-auto translate-y-1/4 bg-gray-200 w-2/3 h-2/3 rounded-xl p-4">
          <textarea name="note" id="new-note"
            className="block w-full h-4/5 mx-auto p-3 rounded-xl outline-none"
            onChange={handleChange}
          />
          <button
            type="button"
            className="mt-8 p-2 bg-yellow-300 rounded-xl shadow-md outline-none cursor-pointer active:shadow-none"
            onClick={handleClickSave}
          >
            Сохранить
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal;
