import LastPlayedEpisode from "./LastPlayed";
import CompletedEpisodes from "./episodesCompleted";
import Divider from "@mui/material/Divider";


export default function DashBoard(){

    return(

        <>

            <h1 style={{textAlign: 'center'}}>User Info</h1>
            <div style={{padding:'0 5%', display:'flex', flexDirection: 'row',justifyContent: 'space-between', columnGap:10, paddingTop: '5%'}}>
            
                <LastPlayedEpisode />

                <Divider orientation="vertical" variant="middle" sx={{width: 40}} flexItem />

                <CompletedEpisodes />

            </div>

        </>
    )
}
