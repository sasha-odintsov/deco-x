import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const Footer = () => {
    return( 
        <Paper sx={{ background: '#bddabc', marginTop: 'auto' }} square>
            <Container maxWidth="lg">
                <Box sx={{ display: {sm: 'flex'}, justifyContent: 'space-between', py: '50px' }}>
                    <Box sx={{ mb: '50px' }}>
                        <Typography variant='h5'>DECO X</Typography>
                        <Typography variant='body1'>Lets make your interior better</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Link id='footer-contacts'/>
                        <Box sx={{ display: 'flex', flexDirection: 'column', mr: '50px' }}>
                            <Typography variant='h6'>Contacts</Typography>
                            <Link href="tel:+380505005050" underline="none" color='inherit'>+38 (050) 500 5050</Link>
                            <Link href="mailto:contact@deco.com" underline="none" color='inherit'>contact@deco.com</Link>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='h6'>Socials</Typography>
                            <Link href="http://www.instagram.com" underline="none" color='inherit'>Instagram</Link>
                            <Link href="http://www.facebook.com" underline="none" color='inherit'>Facebook</Link>
                        </Box>
                    </Box>
                </Box>
                <Divider color='#e0e0e0'/>
                <Typography variant='body1' py='50px' textAlign='center'>&copy;2022 DECO X. All rights reserved</Typography>
            </Container>
        </Paper>
    )
}

export default Footer;