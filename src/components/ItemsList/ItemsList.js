import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useQuery } from 'react-query';
import './ItemsList.css';
import Box from '@mui/material/Box';
import { Link as RouterLink } from "react-router-dom";
import Grow from '@mui/material/Grow';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ItemsList = ({ category }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {setShow(true)}, []);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const { data, isLoading, isError } = useQuery('products-' + category, async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        return data.products;
      });
      if (isLoading) {
        return (
            <Box sx={{ minHeight: '60vh', mt: '50px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="primary" />
            </Box>
        );
      }
      if (isError) {
        return (
            <Box sx={{ minHeight: '60vh', mt: '50px', width: '100%' }}>
                <Typography textAlign='center'>Error</Typography>
            </Box>
        );
      }
      return  (
        <>
            {data.map((el) => {
                return (
                <Grow key={el.id} in={show} timeout={1000}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card sx={{ maxWidth: "100%", position: 'relative' }}>
                        <CardActionArea component={RouterLink} to={'/' + category + '/' + el.id}>
                            <CardMedia
                            component="img"
                            height="250"
                            image={el.images[0]}
                            alt={el.title}
                            />
                            <CardContent>
                                <Typography 
                                gutterBottom 
                                variant="h5" 
                                sx={{whiteSpace: 'nowrap', overflow: 'hidden', textOveflow: 'ellipsis'}}
                                >
                                    {el.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" className='items-overflow'>
                                    {el.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button 
                            size="small" 
                            color="primary" 
                            sx={{ mr:'auto' }}
                            onClick={() => {
                                dispatch({
                                    type: 'ADD_TO_CART',
                                    payload: {
                                        id: el.id,
                                        image: el.images[0],
                                        title: el.title,
                                        description: el.description,
                                        price: el.price
                                    }
                                })
                                handleClick()
                            }}>
                            Add to cart
                            </Button>
                            <Typography variant="body2" component="span" p='5px'>
                                code: {el.id}
                            </Typography>
                        </CardActions>
                        <Box sx={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: 'background.paper'  }}>
                        <Typography variant="body1" component="span" p={3}>
                            {el.price}$
                        </Typography> 
                        </Box>
                    </Card>
                </Grid>
                </Grow>
            )
            })}
            <Snackbar
            open={open}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={handleClose}
            message="Item added to cart"
            />
        </>
    )
}

export default ItemsList;