import * as React from 'react';
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import resumeImg from './images/resume.png'

const Header = () => {

    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '2px solid #000',
      };

    return (
        <div style={{zIndex: 505, margin: 3}}>
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
                <Button variant="contained" size="medium" style={{marginRight: 7}} onClick={handleOpen}>
                    Resume
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle} id='modalBox'>
                    <img src={resumeImg} alt='resume' />
                </Box>
            </Modal>
        </div>
    );
}

export default Header;