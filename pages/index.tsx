import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const App = dynamic(() => import('../imports/app'), { ssr: false })

export default function Page() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
