import { useContext } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { DataProviderContext } from "../providers/DataProvider";

const HomeBox = () => {
  const { latestBooks } = useContext(DataProviderContext) || { latestBooks: [] };

  return (
    <Box>
      <Heading as="h2" size="lg" mb="2" textAlign="center">
        Lecturas más relevantes
      </Heading>
      <Box
        maxH="550px"
        overflow="auto"
        display="flex"
        flexWrap="wrap"
        alignItems="flex-start"
        justifyContent="center"
      >
        {latestBooks.map((book, index) => (
          <Box key={book.id} m="2" textAlign="center" padding="30px">
            <img 
              src={book.volumeInfo.imageLinks.smallThumbnail} 
              alt={book.volumeInfo.title} 
              style={{ width: "150px", height: "225px" }} 
            />
            <Text mt="2" fontWeight="bold" maxW="150px" overflowWrap="anywhere">{book.volumeInfo.title}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeBox;
