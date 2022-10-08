import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1


import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import B4UBoardPic from './images/B4UBoardPic.png';
import offloadPic from './images/offloadPic.png';
import BlogSitePic from './images/BlogSitePic.png';
import WeatherDashboardPic from './images/WeatherDashboardPic.png';
import PortfolioPic from './images/PortfolioPic.png';
import LFGPic from './images/LFG.png'

const ProjectDisplay = () => {
    const projects = [
        {
            title: 'LFG',
            picture: LFGPic,
            description: 'Social Media/LFG App',
            github: 'https://github.com/jmonty94/lets-fricking-game',
            link: 'https://lets-frickin-game.herokuapp.com/',
        },
        {
            title: 'Offload',
            picture: offloadPic,
            description: 'Marketplace App',
            github: 'https://github.com/ayeh6/Offload',
            link: 'https://yeh-offload.herokuapp.com/',
        },
        {
            title: 'BlogSite',
            picture: BlogSitePic,
            description: 'Social Media App',
            github: 'https://github.com/JackYouk/blogSite',
            link: 'https://blogsitebyjackjack.herokuapp.com/',
        },
        {
            title: 'B4UBoard',
            picture: B4UBoardPic,
            description: 'Travel Information App',
            github: 'https://github.com/JackYouk/B4UBoard',
            link: 'http://b4uboard.online/',
        },
        {
            title: 'Weather Dashboard',
            picture: WeatherDashboardPic,
            description: 'Weather App',
            github: 'https://github.com/JackYouk/weather-dashboard',
            link: 'https://jackyouk.github.io/weather-dashboard/',
        },
        {
            title: 'Portfolio',
            picture: PortfolioPic,
            description: 'ฅ^•ﻌ•^ฅ',
            github: 'https://github.com/JackYouk/react-portfolio',
            link: 'https://jackyouk.github.io/react-portfolio/',
        }
    ]
    return (
        <div style={{
            margin: 30,
            zIndex: 55,
            display: 'flex',
            justifyContent: 'center'
            
        }}>
            <Grid container spacing={3} justifyContent="center">
                {projects.map(project => {
                    // create card for projects
                    return (
                        <Grid item xs={8} md={4} justifyContent="center">
                        
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.picture}
                                    alt="image of project"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">
                                        <a href={project.github} target="_blank" rel="noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </Button>
                                    <Button size="small">
                                        <a href={project.link} target="_blank" rel="noreferrer">
                                            <OpenInNewIcon />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        
                        </Grid>
                    );
                })}
            </Grid>    
        </div>
    );
}

export default ProjectDisplay;