import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { INote } from "../../models/models";
import { noteStateSelector } from "../../store/noteSlice";

const NotePage = ({ }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { noteData } = useSelector(noteStateSelector);


  const handleClickBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="mx-auto w-4/5 p-3 ">
        <button
          type="button"
          className="my-8 px-5 py-3 bg-gray-300 rounded-xl shadow-md outline-none cursor-pointer active:shadow-none"
          onClick={handleClickBack}
        >
          Назад
        </button>
        <p className="text-xl text-center">
          {noteData.text}
        </p>
        <div className="mt-5 text-center">
          {noteData.tags.length > 0 && noteData.tags.map((item: string, key: number) => {
            item = item + " "
            return (
              <span key={key}
                className="text-blue-500 text-lg"
              >
                {item}
              </span>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default NotePage;
