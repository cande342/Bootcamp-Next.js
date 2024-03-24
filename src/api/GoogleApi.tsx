export const GOOGLE_BOOKS_API_KEY = 'AIzaSyCXkr8UeorU3RmsTmmPKd4e1rop8t9lKzA';

//Busca y filtra en gral. 
export const fetchBooks = async (searchQuery: string, category: string, relevance: string, maxResults: number) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}+subject:${category}&orderBy=${relevance}&maxResults=${maxResults}&key=${GOOGLE_BOOKS_API_KEY}`
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message);
    }
    const data = await response.json();
    
    // Filtrar libros antes de devolverlos
    const filteredBooks = data.items
      .filter((item: any) => item.volumeInfo.imageLinks) // Filtrar libros sin imagen
      .filter((item: any) => item.volumeInfo.title.length < 50); // Filtrar libros con títulos de menos de 50 caracteres

    return filteredBooks;
  } catch (error) {
    throw new Error('Error al realizar la solicitud a la API de Google Books');
  }
};

//Sólo para categorías.

export const fetchBooksByCategory = async (category: string) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&langRestrict=es,en&maxResults=10&key=${GOOGLE_BOOKS_API_KEY}`);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Error al obtener los datos: ${data.error.message}`);
    }
    return data.items;
  } catch (error) {
    throw new Error('Error al obtener los datos. Por favor, inténtalo de nuevo más tarde.');
  }
};