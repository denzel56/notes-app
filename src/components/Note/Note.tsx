
interface INoteProps  {
  id: number;
  text: string;
  tags: string[]
}

const Note = ({ id, text, tags }: INoteProps) => {

  const handleClick = () => {
    console.log(text);
  }

  return (
    <>
      <div
        className="box-border w-[300px] h-[350px] m-5 p-3 rounded-xl border-2 border-yellow-600 bg-yellow-200"
        onClick={handleClick}
      >
        <p className="">{text}</p>
        <div className="mt-3">
          {tags.length > 0 && tags.map((item, key) => {
            item = item + " "
            return (
              <span key={key}
                className="text-blue-700"
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

export default Note;
