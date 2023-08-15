import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import supabase from '../supabase';

function FavCard({ show }) {

    const [favorites, setFavorites] = useState([]);

    const handleRemoveEpisodeFromFavorites = async (episodeId) => {
        try {
          const { data, error } = await supabase
            .from('Favorites')
            .delete()
            .eq('episode_id', episodeId);
      
          if (error) {
            console.error('Error removing episode from favorites:', error.message);
            return;
          }
      
         
          setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.episode_id !== episodeId)
          );
        } catch (error) {
          console.error('Error removing episode from favorites:', error.message);
        }
      };


  const cardStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#875b31',
    color: '#fff',
    margin: 'auto',
    height: '100%',
  };

  const imageStyle = {
    height: 'calc(100% * 0.95)',
  };

  const deleteIconStyle = {
    position: 'absolute',
    bottom: '8px',
    left: '8px',
    color: '#fff',
  };

  const contentStyle = {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    padding: '0px 8px 0px 8px', 
    marginBottom: '30px',
  };

  return (
    <Card sx={cardStyle}>
      <Link to={show.season_id}>
        <CardMedia
          component="img"
          alt={show.season_title}
          image={show.season_image}
          title={show.season_title}
          sx={imageStyle}
        />
      </Link>
      <CardContent sx={contentStyle}>
        <div>
          <Typography variant="h5" component="h2" mb={4} textAlign='center'>
            {show.show_title}
          </Typography>
          <Typography gutterBottom component="p">
            {`Episode title: ${show.episode_title}`}
          </Typography>
          <Typography gutterBottom component="p">
            {show.season_title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'Added: ' +
              new Date(show.created_at).toISOString().substring(0, 10) +
              ' at' +
              new Date(show.created_at).toString().substring(15, 21)}
          </Typography>
        </div>
        <IconButton
          aria-label="Remove from favorites"
          onClick={() => handleRemoveEpisodeFromFavorites(show.episode_id)}
          sx={deleteIconStyle}
        >
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default FavCard;
