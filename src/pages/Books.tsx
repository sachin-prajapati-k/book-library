import books from "../Data/data";
import { useNavigate } from "react-router-dom";

export default function BooksShelf() {
  const navigate = useNavigate();
  const handleclick = (id) => {
    return navigate(`/books/${id}`);
  };
  return (
    <>
      <div>here your will see the books</div>
      <div>
        {books.map((book) => (
          <>
            <div
              key={book.id}
              className="bg-indigo-200 flex flex-row my-2 cursor-pointer"
              onClick={() => handleclick(book.id)}
            >
              <div>{book.title}</div>
              <div>{book.author}</div>
              <div>{book.genre}</div>
              <div>{book.year}</div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
