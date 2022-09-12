import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1


import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectDisplay = () => {
    const projects = [
        {
            title: 'Offload',
            picture: '/offloadPic.png',
            description: 'Marketplace App',
            github: 'https://github.com/ayeh6/Offload',
            link: 'https://yeh-offload.herokuapp.com/',
        },
        {
            title: 'BlogSite',
            picture: '/BlogSitePic.png',
            description: 'Social Media App',
            github: 'https://github.com/JackYouk/blogSite',
            link: 'https://blogsitebyjackjack.herokuapp.com/',
        },
        {
            title: 'B4UBoard',
            picture: '/B4UBoardPic.png',
            description: 'Travel Information App',
            github: 'https://github.com/JackYouk/B4UBoard',
            link: 'http://b4uboard.online/',
        },
        {
            title: 'Weather Dashboard',
            picture: '/WeatherDashboardPic.png',
            description: 'Weather App',
            github: 'https://github.com/JackYouk/weather-dashboard',
            link: 'https://jackyouk.github.io/weather-dashboard/',
        },
        {
            title: 'Portfolio',
            picture: '/PortfolioPic.png',
            description: 'ฅ^•ﻌ•^ฅ',
            github: 'https://github.com/JackYouk/react-portfolio',
            link: 'https://jackyouk.github.io/react-portfolio/',
        }
    ]
    return (
        <div style={{
            marginTop: 30,
            zIndex: 55,
        }}>
            <Grid container style={{
                            justifyContent: 'center',
                            margin: 1
                        }}>
                {projects.map(project => {
                    // create card for projects
                    return (
                        <Grid xs={8} md={4}>
                        <div style={{
                            margin: 5,
                            marginTop: 20,
                        }}>
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
                        </div>
                        </Grid>
                    );
                })}
            </Grid>    
        </div>
    );
}

export default ProjectDisplay;