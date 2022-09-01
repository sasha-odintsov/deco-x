import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ProductDetails = ({ category }) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    // console.log(id)
    const { data, isLoading, isError } = useQuery('repoData', () => {
        return fetch(`https://dummyjson.com/products/category/${category}`)
        .then((resp) => resp.json())
        .then((data) => data.products)
        .then((item) => {
            return item.find((el) => {
                return el.id == id
            })
        }) 
      });
      if (isLoading) {
        return 'Loading...';
      }
      if (isError) {
        return 'Error';
      }
      console.log(data)
      return (
        <Paper>
            <Container maxWidth="lg" sx={{ py: '100px' }}>
                <Typography variant='h5' mb={3}>{data.title}</Typography>
                <Grid container spacing={1}>
                    <Grid item sx={12} sm={6}>
                        <img style={{ maxWidth: '90%'}} src={data.images[0]} alt={data.title}/>
                    </Grid>
                    <Grid item sx={12} sm={6} justifyContent="center">
                        <Typography>{data.brand}</Typography>
                        <Typography>{data.description}</Typography>
                        <Divider />
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Typography>{data.price}$</Typography>
                            <Button
                            onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: {
                                        id: data.id,
                                        image: data.images[0],
                                        title: data.title,
                                        description: data.description,
                                        price: data.price
                                    }
                                })
                            }}
                            >Add to cart</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
      )
}

export default ProductDetails;