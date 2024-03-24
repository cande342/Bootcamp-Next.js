//Conmpontete de la pagina CATEGORÍAS, tiene la función para traducir tmbn.

import React, { useState } from 'react';
import { Box, Button, Text, Divider } from '@chakra-ui/react';
import {fetchBooksByCategory} from '../api/GoogleApi'
import BookList from './BookList';


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

interface CategoryTranslations {
  [key: string]: string;
}

const Categories: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryResults, setCategoryResults] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const categoryTranslations: CategoryTranslations = {
    'Scary': 'Terror',
    'Fantasy': 'Fantasía',
    'Science Fiction': 'Ciencia Ficción',
    'Romance': 'Romance',
    'Thriller': 'Thriller'
  };

  const categories: string[] = ['Scary', 'Fantasy', 'Science Fiction', 
                                'Romance','Thriller'  ];

  const handleCategorySelect = async (category: string) => {
    try {
      const books = await fetchBooksByCategory(category);
      setCategoryResults(books);
      setError(null);
      setSelectedCategory(category);
    } catch (error) {
      setError(error.message);
    }
  };

  const getCategoryTranslation = (category: string): string => {
    return categoryTranslations[category] || category; // Si no hay traducción, devuelve el nombre original
  };

  return (
    <Box p="4">
        <div className='categoriesContent'>
        {categories.map((category, index) => (
          <Button 
            key={index} 
            onClick={() => handleCategorySelect(category)} 
            m="3"
            width="200px"
            color="#55828B"
            border="solid 2px"
            borderColor="#55828B"
          >
            {getCategoryTranslation(category)}
          </Button>

        ))}
      </div>
      {error && <Text color="red">{error}</Text>}
      <Divider padding="10px" />
      <Box mt="4">
        <p>Resultados de la categoría: {selectedCategory}</p>
        <BookList categoryResults={categoryResults} />
      </Box>
    </Box>
  );
};




export default Categories;
