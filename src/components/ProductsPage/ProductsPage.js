import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProductsPage = ({ title, dcrs, item }) => {
    return (
        <>
        <Paper>
            <Container maxWidth="lg" sx={{ padding: '150px 0 250px 0' }}>
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
                {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {item}                   
                </Box> */}
                {item} 
            </Container>
        </Paper>
        </>
    )
}

export default ProductsPage;