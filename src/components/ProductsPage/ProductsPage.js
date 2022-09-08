/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';

const ProductsPage = ({ title, dcrs, item, handleClick }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(handleClick)
    })
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
        <Paper>
            <Container maxWidth="lg" sx={{ padding: '150px 0 250px 0', minHeight: '40vh' }}>
                <Typography variant='h4' textAlign='center'>
                    {title}
                </Typography>
                <Typography variant='subtitle1' textAlign='center'>
                    {dcrs}
                </Typography>
            </Container>
        </Paper>
        <Paper square sx={{ background: '#fff'}}>
            <Container maxWidth="lg" sx={{ transform: 'translateY(-200px)' }}>
                <Grid container rowSpacing={4} columnSpacing={2}>
                    {item} 
                </Grid>
            </Container>
        </Paper>
        <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        onClose={handleClose}
        message="Item added to cart"
        />
        </>
    )
}

export default ProductsPage;