import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Header = () => {

    return (
        <div style={{zIndex: 505}}>
            <div>
                <div>
                    <h1>Jack Youkstetter Portfolio</h1>
                </div>
                <a href="mailto:jackyoukstetter1@gmail.com" style={{marginRight: 7, marginLeft: 7}}>
                    <Button variant="contained" size="medium">
                        <EmailIcon />
                    </Button>
                </a>
                <a href="https://github.com/JackYouk" target="_blank" rel="noreferrer" style={{marginRight: 7}}>
                    <Button variant="contained" size="medium">
                        <GitHubIcon />
                    </Button>
                </a>
                <a href="tel:+15105080618" style={{marginRight: 7}}>
                    <Button variant="contained" size="medium">
                        <PhoneIcon />
                    </Button>
                </a>
                <a href="sms:+15105080618" style={{marginRight: 7}}>
                    <Button variant="contained" size="medium">
                        <ChatBubbleIcon />
                    </Button>
                </a>
                <Button variant="contained" size="medium" style={{marginRight: 7}} onClick={() => {
                    // modal for resume
                }}>
                    Resume
                </Button>
            </div>
        </div>
    );
}

export default Header;