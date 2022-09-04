import './MainPage.scss';
import { useState, useEffect } from 'react';
import { Link as RouterLink } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';

const MainPage = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {setShow(true)}, []);
    return (
        <div className="main-page-wrap">
            <Paper elevation={0} square sx={{ background: 'transparent'}} >
                <Container maxWidth="lg">
                    <Grid container direction="row" alignItems="center" sx={{height: '100vh'}}>
                        <Grow in={show}>
                            <Grid item md={6} mt="80px">
                                <Typography variant='h4'>
                                    Create a home that defines who you are.
                                </Typography>
                                <Typography variant='subtitle1'>
                                    The stylish interior makes us want to spend more time in it. We present interesting sets to create an apartment. We choose the right colors acoording to our own taste.
                                </Typography>
                                <Stack my={4} spacing={2} direction="row">
                                    <Button variant="contained" component={RouterLink} to="/about">Read more</Button>
                                    <Button variant="outlined" href="#footer-contacts">Contact us</Button>
                                </Stack>
                            </Grid>
                        </Grow>
                    </Grid>
                </Container>
            </Paper>
        </div>
    )
}

export default MainPage;