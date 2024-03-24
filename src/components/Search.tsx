import React, { useState } from 'react';
import { Box, Heading, Input, Button, Text, Flex } from '@chakra-ui/react';
import { fetchBooks } from '../api/GoogleApi';

const Search: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const category = 'Fiction';
      const relevance = 'relevance';
      const maxResults = 10; // Definir el límite de resultados de búsqueda
      const books = await fetchBooks(searchQuery, category, relevance, maxResults);
      setSearchResults(books);
      setError(null);
    } catch (error) {
      setError('Error. Please try again later.'); 
    }
  };

  return (
    <Box p="4">
      <Heading as="h1" size="xl" mb="4" fontFamily="Pacific" textAlign="center">
        Buscar libros
      </Heading>
      <Flex justify="center" align="center" height="auto">
        <form onSubmit={handleSubmit} style={{ width: '500px' }}>
          <Flex align="baseline">
            <Input
              type="text"
              placeholder="Ingrese el título, autor, etc."
              value={searchQuery}
              onChange={handleSearchChange}
              mr="2"
            />
            <Button type="submit" bg="#55828B" color="white">
              Buscar
            </Button>
          </Flex>
        </form>
      </Flex>
      {error && <Text color="red">{error}</Text>}
      <Box mt="4">
        <p>Resultados de la búsqueda</p>
        <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap", padding:"20px" }}>
          {searchResults.map((book) => (
            <li key={book.id} style={{ width: "250px", height: "150px", padding: "10px", margin:"20px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} style={{ width: "50px", height: "75px", objectFit: "cover", marginRight: "10px" }} />
                <div>
                  <p style={{ fontWeight: "bold", margin: 0 }}>{book.volumeInfo.title}</p>
                  <p style={{ margin: 0 }}>{book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'Unknown'}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
}

export default Search;
