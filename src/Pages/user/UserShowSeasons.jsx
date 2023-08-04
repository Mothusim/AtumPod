import { useState } from "react";
import { useOutletContext } from "react-router";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AudioPlayer from "../../components/AudioPlayer";
import supabase from '../../supabase';
import { useAuth } from '/src/Auth.jsx';
import Favorite from "@mui/icons-material/Favorite";
import { useAudioPlayer } from "../../components/AudiioPlayerContext";

export default function UserShowInfo() {
    
    const auth = useAuth();

    const { currentShow } = useOutletContext();

    const { isAudioVisible, setIsAudioVisible } = useAudioPlayer();

    const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(-1);
    const [isEpisodeSelected, setIsEpisodeSelected] = useState(false);
    const [message, setMessage] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);
    const [episodeId, setEpisodeId] = useState()
    const [imgs, setImgs] = useState('');
    

    const addToFavorites = async (episodeIndex, seasonTitle) => {

        if (!auth.user) {
            
            setMessage('Please log in to add episodes to favorites.');
            return;

        }

        try {
            if (episodeIndex === -1) {

                setMessage('Please select an episode before adding to favorites.');
                return;

            }

            
            const episode = currentShow.seasons.find(seas => seas.title === seasonTitle)?.episodes[episodeIndex];

            if (!episode) {

                setMessage('Episode not found.');
                return;

            }

            const episodeId = episode.title; 
            const episodeTitle = episode.title
            const episodeDescription = episode.description
            const episodeAudio = episode.file
            const userId = auth.user.id;
            const seasonImage = imgs

            const showTitle = currentShow.title

            const { data: existingFavorites, error: fetchError } = await supabase

                .from('Favorites')
                .select('*')
                .eq('episode_id', episodeId)
                .eq('user_id', userId);

            if (fetchError) {

                console.log(fetchError);
                setMessage('Error checking favorites.');
                return;

            }

            if (existingFavorites.length > 0) {

                setMessage('Episode is already in favorites.');
                console.log(`${episodeId} has already been added!`)
                return;

            }

            const { data, error } = await supabase

                .from('Favorites')
                .insert({ 
                    episode_id: episodeId,
                    user_id: userId,
                    episode_title: episodeTitle,
                    episode_description: episodeDescription,
                    episode_file: episodeAudio,
                    season_title: seasonTitle,
                    season_image: seasonImage,
                    show_title: showTitle,

                
                });

            if (error) {

                console.log(error);
                setMessage('Error adding episode to favorites.');

            } else {

                setMessage('Episode has been added to favorites!');
                console.log(`${episodeId} has been added!`)

            }

            setIsFavorite(true);

        } catch (error) {

            console.log(error);
            setMessage('Error adding episode to favorites.');

        }

    };

    const handlePlay = (index, title) => {

        setCurrentEpisodeIndex(index);
        setIsEpisodeSelected(true);
        setIsAudioVisible(true)
        setEpisodeId(title);

    };

    const handleFavourites = (index, seasonTitle, seasonImg) => {

        setCurrentEpisodeIndex(index);
        addToFavorites(index, seasonTitle);
        setImgs(seasonImg)
        
    };

    const ey = currentShow.seasons.map((seas) => {

        return (

            <Accordion key={seas.title}>

                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <Typography component='h1' fontWeight='bold'>{seas.title}</Typography>
                        <Typography component='p'>{`Episodes: ${seas.episodes.length}`}</Typography>

                    </div>

                </AccordionSummary>

                <AccordionDetails>

                    <ul>

                        {seas.episodes.map((episode, episodeIndex) => (

                            <div key={episode.title} >
                            
                                <p onClick={() => handlePlay(episodeIndex, episode.title)}>{episode.title}</p>
                                <Favorite onClick={() => handleFavourites(episodeIndex, seas.title, seas.image)} />

                            </div>

                        ))}

                    </ul>

                </AccordionDetails>

            </Accordion>

        );

    });

    return (

        <>
            <div>{ey}</div>

            {currentEpisodeIndex !== -1 && currentShow.seasons[0].episodes[currentEpisodeIndex]?.file  && isAudioVisible && (

                <AudioPlayer

                    audioSource={currentShow.seasons[0].episodes[currentEpisodeIndex].file}
                    currentEpisode={currentEpisodeIndex}
                    episodeId={episodeId}

                />
            )}

            <p>{message}</p>

        </>

    );

}
