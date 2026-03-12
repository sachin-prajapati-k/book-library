import { useParams } from "react-router-dom";
import books from "../Data/data";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id ?? ""));
  return (
    <>
      <div key={book?.id}>
        <div>{book?.title}</div>
        <div>{book?.author}</div>
        <div>{book?.genre}</div>
        <div>{book?.year}</div>
      </div>
    </>
  );
}
