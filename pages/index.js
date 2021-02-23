import React from 'react';
import { Box }  from '../src/components/commons/Box';
import Cover from '../src/components/commons/Cover';
import MenuWrapper from '../src/components/commons/Menu';
import Projects from '../src/components/commons/Projects';
import Footer from '../src/components/commons/Footer'


export default function Home() {
  return (
    <Box>
    <Cover />
    <MenuWrapper /> 
    <Projects />
    <Footer />
    </Box>
     
  )}