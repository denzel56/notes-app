import { useDispatch } from "react-redux";
import { modalState } from "../../store/modalSlice";

const AddButton = ({ }) => {
  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch(modalState());
  }

  return (
    <>
      <div
        className="fixed bottom-0 right-0 flex justify-center items-center w-16 h-16 mr-3 mb-3 rounded-full bg-blue-600 text-2xl text-white"
        onClick={handleClick}
      >+</div>
    </>
  )
}

export default AddButton;
