import { useEffect, useState } from 'react';
import supabase from '../supabase';
import { useAuth } from '../Auth';

const LastPlayedEpisode = () => {

  const [lastPlayedEpisode, setLastPlayedEpisode] = useState(null);
  const auth = useAuth();

  useEffect(() => {

    const fetchLastPlayedEpisode = async () => {

      if (!auth.user) return;

      try {
        
        const { data, error } = await supabase

          .from('history')
          .select('episode_id, timestamp, is_completed')
          .eq('user_id', auth.user.id)
          .order('timestamp', { ascending: false }) 
          .limit(1);

        if (error) {

          console.error('Error fetching last played episode:', error.message);
          return;

        }

        if (data.length > 0) {

          setLastPlayedEpisode(data[0]); 

        }
      } catch (error) {

        console.error('Error fetching last played episode:', error.message);

      }

    };

    fetchLastPlayedEpisode();

  }, [auth.user]);

  if (!lastPlayedEpisode) {

    return <h1>No last played episode found.</h1>;

  }

  
  const { episode_id, timestamp, is_completed } = lastPlayedEpisode;
  return (
    <div>
      <h1 style={{fontWeight: 'bold'}}>Episodes</h1>
      <p>Last played episode: <span style={{fontWeight: 'bold'}}>{episode_id}</span></p>
      <p>Progress:<span style={{fontWeight: 'bold'}}>{timestamp} seconds</span></p>
      <p>Is completed: {is_completed ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default LastPlayedEpisode;