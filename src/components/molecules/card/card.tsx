import React from 'react';
import {Box, Text} from '@chakra-ui/react';

export const Card: React.FC = () => {
  return (
    <Box
      ml={'sp-12'}
      h={'282px'}
      w={'188px'}
      borderRadius={'radii-6'}
      bg={'purple.400'}
      position={'relative'}
      transform={'skewX(-10deg)'}
    >
      <Box
        h={'282px'}
        w={'188px'}
        transition={'all .3s'}
        position={'absolute'}
        _hover={{
          transform: 'translate(15px, -15px)',
          borderWidth: '2px',
          borderColor: 'purple.400',
        }}
        borderRadius={'radii-6'}
        overflow={'hidden'}
      >
        <Box
          bgImage={
            'https://img.nimo.tv/o/banner/6349E139B47568476F09BF716E9635F7_acde1568d4c6d846e9f82c234717af4c.jpg/w256_l0/img.webp'
          }
          w={'full'}
          height={'full'}
          borderRadius={'radii-6'}
          transform={'skew(10deg) scale(1.26)'}
          backgroundSize={'cover'}
        />
        <Box
          position={'absolute'}
          top={0}
          background={'rgb(0 0 0 / 60%)'}
          width={'full'}
          height={'full'}
          opacity={0}
          _hover={{
            opacity: 1,
          }}
        >
          <Text>LMHT</Text>
        </Box>
      </Box>
    </Box>
  );
};
