import { createContext, useState, useEffect, ReactNode } from 'react';
import { fetchBooks } from '../api/GoogleApi';


// Definimos la interfaz para los datos del libro
interface Book {
  id: string;
  volumeInfo: {
    title: string;
    categories?: string[];
    authors?: string[];
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

// Definimos la interfaz del contexto para el DataProvider
interface DataProviderContextType {
  relevantBooks: Book[];
  latestBooks: Book[];
}

// Creamos el contexto del DataProvider
export const DataProviderContext = createContext<DataProviderContextType | undefined>(undefined);

// Componente DataProvider
const DataProvider = ({ children }: { children: ReactNode }) => {
  const [relevantBooks, setRelevantBooks] = useState<Book[]>([]);
  const [latestBooks, setLatestBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchLatestBooks = async () => {
    try {
      const latestBooks = await fetchBooks('', 'fiction', 'newest', 7);
      setLatestBooks(latestBooks);
      setError(null);
    } catch (error) {
      setError('Error al obtener los datos. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error al obtener los últimos libros:', error);
    }
  };

  const fetchRelevantBooks = async () => {
    try {
      const relevantBooks = await fetchBooks('', 'fiction', 'relevance', 5);
      setRelevantBooks(relevantBooks);
      setError(null);
    } catch (error) {
      setError('Error al obtener los datos de los libros relevantes. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error al obtener los libros relevantes:', error);
    }
  };

  useEffect(() => {
    fetchLatestBooks();
    fetchRelevantBooks();
  }, []);

  return (
    <DataProviderContext.Provider value={{ relevantBooks, latestBooks }}>
      {children}
    </DataProviderContext.Provider>
  );
}

export default DataProvider;

