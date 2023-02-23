import { Link } from "react-router-dom";
import { INote } from "../../models/models";


const Note = ({ id, text, tags }: INote) => {

  return (
    <>
      <div
        className="box-border w-[300px] h-[350px] m-5 p-3 rounded-xl border-2 border-yellow-600 bg-yellow-200 "
      >
        <p className="h-4/5 overflow-hidden">{text}</p>
        <div className="mt-3">
          {tags.length > 0 && tags.map((item, key) => {
            item = item + " "
            return (
              <span key={key}
                className="text-blue-500"
              >
                {item}
              </span>
            )
          })}
        </div>
        <div className="cursor-pointer text-blue-800">
          <Link to={`/note/${id}`} >Read all</Link>
        </div>
      </div>
    </>
  )
}

export default Note;
