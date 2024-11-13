'use client';

import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import InputBase from '@mui/material/InputBase';
import { useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { dialogClasses } from '@mui/material/Dialog';

import { useRouter } from 'src/routes/hooks';
import { isExternalLink } from 'src/routes/utils';

import { useBoolean } from 'src/hooks/use-boolean';
import { useEventListener } from 'src/hooks/use-event-listener';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';
import { SearchNotFound } from 'src/components/search-not-found';

import { applyFilter } from './utils';
import { ResultItem } from './result-item';

// ----------------------------------------------------------------------

export function Searchbar({ data: navItems = [], sx, ...other }) {
  const theme = useTheme();

  const router = useRouter();

  const search = useBoolean();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const handleClose = useCallback(() => {
    search.onFalse();
    setSearchQuery('');
  }, [search]);

  const handleKeyDown = (event) => {
    if (event.key === 'k' && event.metaKey) {
      search.onToggle();
      setSearchQuery('');
    }
  };

  useEventListener('keydown', handleKeyDown);

  const handleClick = useCallback(
    (path) => {
      if (isExternalLink(path)) {
        window.open(path);
      } else {
        router.push(path);
      }
      handleClose();
    },
    [handleClose, router]
  );

  const handleSearch = useCallback(
    (event) => {
      const query = event.target.value;
      setSearchQuery(query);
      
      // Filter items only after setting the query to avoid rendering issues
      const newFilteredItems = applyFilter(navItems, query);
      setFilteredItems(newFilteredItems);
    },
    [navItems]
  );

  return (
    <Dialog
      open={search.value}
      onClose={handleClose}
      sx={{
        [`& .${dialogClasses.paper}`]: {
          width: '100%',
          maxWidth: 720,
          margin: 'auto',
        },
      }}
      {...other}
    >
      <Box sx={{ p: 2, ...sx }}>
        <InputBase
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon>
                <Iconify icon="eva:search-fill" />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ width: '100%' }}
        />
      </Box>
      <Scrollbar sx={{ maxHeight: 400 }}>
        {filteredItems.length === 0 ? (
          <SearchNotFound searchQuery={searchQuery} />
        ) : (
          filteredItems.map((item, index) => {
            const { title, path } = item;
            if (!title || !path) {
              console.error('Invalid item:', item); // Log only for debugging, safe to remove in production
              return null;
            }
            return (
              <ResultItem
                key={index}
                title={title}
                path={path}
                onClick={() => handleClick(path)}
              />
            );
          })
        )}
      </Scrollbar>
    </Dialog>
  );
}
