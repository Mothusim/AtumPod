import { useEffect, useState } from 'react';
import supabase from '../supabase';
import { useAuth } from '../Auth';


const CompletedEpisodes = () => {
  const [completedEpisodes, setCompletedEpisodes] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    const fetchCompletedEpisodes = async () => {
      if (!auth.user) return;

      try {
        
        const { data, error } = await supabase
          .from('history')
          .select('episode_id, timestamp')
          .eq('user_id', auth.user.id)
          .eq('is_completed', true);

        if (error) {
          console.error('Error fetching completed episodes:', error.message);
          return;
        }

        setCompletedEpisodes(data);
      } catch (error) {
        console.error('Error fetching completed episodes:', error.message);
      }
    };

    fetchCompletedEpisodes();
  }, [auth.user]);

 

  return (
    <div>

        {completedEpisodes.length !== 0?

            <>
                <h1 style={{fontWeight: 'bold'}}>Completed Episodes:</h1>

                <ul>

                    {completedEpisodes.map((episode) => (

                    <li key={episode.episode_id}>
                        {episode.episode_id} - Progress: {episode.timestamp} seconds
                    </li>

                    ))}

                </ul>

            </>

            :
            <>
            <h1>List of Completed episodes.</h1>
            <p>No completed episodes found.</p>

            </>

        }

    </div>

  );

};

export default CompletedEpisodes;
