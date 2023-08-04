// Parent Component - Favourites.jsx
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import supabase from '../supabase';
import FavCard from '../components/FavCard';
import {useAuth} from '../Auth'
import Button from '@mui/material/Button';

function Favourites() {
  const [favorites, setFavorites] = useState([]);
  const auth = useAuth();
  const [sortOrder, setSortOrder] = useState('default');

  const allFavourites = async () => {
    if (!auth.user) {
      console.log('User not logged in.');
      return;
    }

    const userId = auth.user.id;
    let query = supabase.from('Favorites').select().match({ user_id: userId });

    if (sortOrder === 'A-Z') {
      query = query.order('show_title');
    } else if (sortOrder === 'Z-A') {
      query = query.order('show_title', { ascending: false });
    } else if (sortOrder === 'date-asc') {
      query = query.order('created_at');
    } else if (sortOrder === 'date-desc') {
      query = query.order('created_at', { ascending: false });
    }

    const { data, error } = await query;

    if (error) {
      console.log(error);
    }

    if (data) {
      setFavorites(data);
    }
  };

  const handleSort = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  useEffect(() => {
    allFavourites();
  }, [sortOrder]);

  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <h1>Favourites</h1>

      <div style={{ marginBottom: '10px' }}>
        <Button
          variant="contained"
          onClick={() => handleSort('A-Z')}
          disabled={sortOrder === 'A-Z'}
        >
          Sort A-Z
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSort('Z-A')}
          disabled={sortOrder === 'Z-A'}
        >
          Sort Z-A
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSort('date-asc')}
          disabled={sortOrder === 'date-asc'}
        >
          Sort by Date (Ascending)
        </Button>
        <Button
          variant="contained"
          onClick={() => handleSort('date-desc')}
          disabled={sortOrder === 'date-desc'}
        >
          Sort by Date (Descending)
        </Button>
      </div>

      {favorites.length > 0 ? (
        <Grid container spacing={5}>
          {favorites.map((show) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
              <FavCard
                show={show}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>No favorite shows yet.</p>
      )}
    </div>
  );
}

export default Favourites;
