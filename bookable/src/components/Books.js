const Books = ({ books }) => {
  return (
    <div>
      <h1>These books are from the API</h1>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Books;
