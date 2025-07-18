import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import ShopProducts from './ShopProducts';

const ShopProductsContainer = ({ items }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // Treat <768px as mobile
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const groupedItems = [];
  for (let i = 0; i < items.length; i += 10) {
    groupedItems.push(items.slice(i, i + 10));
  }

  const handleViewMore = () => {
    console.log('View More clicked');
  };

  return (
    <>
      {groupedItems.map((group, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexWrap: isMobile ? 'nowrap' : 'wrap',
            overflowX: isMobile ? 'auto' : 'unset',
            gap: 2,
            mb: 3,
            px: isMobile ? 1 : 0,
            scrollSnapType: isMobile ? 'x mandatory' : 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            scrollbarWidth: 'none',
          }}
        >
          {group.map((item) => (
            <Box
              key={item.id}
              sx={{
                flexShrink: 0,
                scrollSnapAlign: isMobile ? 'start' : 'unset',
              }}
            >
              <ShopProducts {...item} small={isMobile} />
            </Box>
          ))}

          {isMobile && (
            <Box sx={{ alignSelf: 'center', flexShrink: 0 }}>
              <Button
                onClick={handleViewMore}
                sx={{
                  color: '#00A149',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  background: 'transparent',
                  '&:hover': {
                    textDecoration: 'underline',
                    background: 'transparent',
                  },
                }}
              >
                View More →
              </Button>
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default ShopProductsContainer;
