import React from 'react';
import { Link } from 'react-router-dom'; 
import { Box, Flex, Heading} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

const Nav: React.FC = () => {
  return (
    <Box bg="#012428" p={4}>
      <Flex alignItems="center" justifyContent="space-between">
      <Menu>
          <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon />} color="#E4FDE1" variant='outline' />
          <MenuList>
            <MenuItem as={Link} to='/'>
              Home
            </MenuItem>
            <MenuItem as={Link} to='/categories'>
              Categorias
            </MenuItem>
            <MenuItem as={Link} to='/search'>
              Buscar
            </MenuItem>
          </MenuList>
        </Menu>

        <Heading size="md" color="#E4FDE1" fontSize="24px" fontWeight="bold" fontFamily="Pacifico">
           Fiction World
        </Heading>

      </Flex>
    </Box>
  );
}

export default Nav;


