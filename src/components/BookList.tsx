//Componente que muestra los resultados de CATEGORIAS, con el toggle.


import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';

interface Book {
    id: string;
    volumeInfo: {
      title: string;
      publishedDate: number;
      description: string;
      imageLinks: {
        smallThumbnail: string;
      };
    };
  }
  
interface BookListProps {
  categoryResults: Book[];
}

const BookList: React.FC<BookListProps> = ({ categoryResults }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  const toggleDescription = (book: Book) => {
    setCurrentBook(book);
    setShowDescription(true);
  };

  const handleCloseDescription = () => {
    setShowDescription(false);
  };

  return (
    <div>
        <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap", margin: "20px", justifyContent: "center", padding: "20px" }}>
          {categoryResults.map((book: Book) => (
            <li key={book.id} style={{ width: "250px", height: "350px", padding: "10px", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
              <div style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", flex: 1 }}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} style={{ width: "100%", height: "70%", objectFit: "cover" }} />
                <div style={{ padding: "10px", maxHeight: "60px", overflowY: "auto" }}>
                  <p style={{ fontWeight: "bold", marginBottom: "5px" }}>{book.volumeInfo.title}</p>
                </div>
              </div>
              <Button onClick={() => toggleDescription(book)} style={{
                width: "100%",
                backgroundColor: "#55828B",
                color: "white",
                borderRadius: "0",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0"
              }}>
                Leer
              </Button>
            </li>
          ))}
        </ul>
      {showDescription && (
        <div style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 999, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "relative", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", maxWidth: "500px", maxHeight:"400px", overflowY: "auto" }}>
            <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{currentBook?.volumeInfo.title}</p>
            <p>{currentBook?.volumeInfo.description}</p>
            <Button onClick={handleCloseDescription} style={{ position: "absolute", top: "10px", right: "10px" }}>Cerrar</Button>
          </div>
        </div>
)}

    </div>
  );
}

export default BookList;
