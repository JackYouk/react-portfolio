import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProjectDisplay = () => {
    const projects = [
        {
            title: 'Offload',
            picture: '/offloadPic.png',
            description: 'Marketplace/Social Media App',
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
    ]
    return (
        // container for the project cards
        <div style={{
            display: 'flex',
            marginTop: 40,
            zIndex: 55,
        }}>
            {projects.map(project => {
                // create card for projects
                return (
                    <div style={{
                        margin: 5,
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
                                    <a href={project.github}>
                                        <GitHubIcon />
                                    </a>
                                </Button>
                                <Button size="small">
                                    <a href={project.link}>
                                        <OpenInNewIcon />
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectDisplay;