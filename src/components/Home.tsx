import { Box, Text, Divider } from "@chakra-ui/react";
import HomeBox from "./HomeBox";
import Carrousel from "./Carrousel";
import HomeBox2 from "./HomeBox2";

export const GOOGLE_BOOKS_API_KEY = 'AIzaSyCXkr8UeorU3RmsTmmPKd4e1rop8t9lKzA';

const Home = () => {

      return (
      <Box className="main">  
          <Box
          maxW="800px"
          mx="auto" // Esto centra horizontalmente el Box
          mt="15px"
          >
              <Text fontSize="lg" mb="4" mt="15px" maxWidth="800px" textAlign="center" lineHeight="1.5">
                ¡Explora un mundo de aventuras literarias con Fiction World! Nuestra
                biblioteca te ofrece una amplia variedad de libros, desde clásicos
                hasta éxitos contemporáneos sobre Ficción, en todos los géneros
                imaginables. Sumérgete en historias fascinantes y descubre nuevos
                mundos mientras disfrutas de la experiencia de la lectura.
              </Text>
          </Box>    
           <Box 
           className="carrousel>"
           maxW="900px"
           maxH="300px"
           mx="auto"
           > 
              <Carrousel/>  
            </Box>          
              <Divider mb="15px" padding="10px" sx={{ borderColor: "#55828B", width: "100%" }}/>
                <HomeBox/>
              <Divider mb="15px" padding="10px" sx={{ borderColor: "#55828B", width: "100%" }}/>
                <HomeBox2/>
          
        </Box>
      );
    };

export default Home;