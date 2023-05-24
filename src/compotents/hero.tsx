import * as React from 'react';
import { useParams} from "react-router-dom";
import useFetchHeroes from "../hooks/useFetchHeroes";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CircularColor from "./circular";
import {Box} from "@mui/material";

const Hero: React.FC = () => {

    const {id} = useParams<{ id: string }>()
    const { data, loading }  = useFetchHeroes(
        `character/${id}`
    );


    return (
        <>
            {loading ? (
                <Box >
                    <CircularColor/>
                </Box>
        ) : (
                <Card sx={{ maxWidth: 345, mb: 2, mt: 2 }}>
                    <CardMedia
                        sx={{ height: 100, width: 100 }}
                        image={data?.image}
                        title="hero img"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {data?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data?.status}
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </>
    );
}

export default Hero;

// import React from 'react';
// import { useParams} from "react-router-dom";
// import useFetchHeroes from "../hooks/useFetchHeroes";
//
// const Hero = () => {
//     const {id} = useParams()
//     const { data, loading }  = useFetchHeroes(
//         `character/${id}`
//     );
//
//
//     return (
//         <div style={{padding:"30px"}}>
//         {loading ? (
//             <p>Loading...</p>
//         ) : (
//             <div className="hero-data">
//                 <img style={{width:"150px", height: "150px"}} src={data.image} alt=""/>
//                 <h2>{data.name}</h2>
//                 <p>{data.status}</p>
//                 <p>{data.species}</p>
//             </div>
//         )}
//         </div>
//     );
// };
//
// export default Hero;

