import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useQuery } from 'react-query';
import './ItemsList.scss';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import Grow from '@mui/material/Grow';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ItemsList = ({ category }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {setShow(true)}, []);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { data, isLoading, isError } = useQuery('repoData', async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        console.log(data)
        return data.products;
      });
      if (isLoading) {
        return 'Loading...';
      }
      if (isError) {
        return 'Error';
      }
      return  (
        <>
            {data.map((el) => {
                return (
                <Grow in={show} timeout={1000}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card key={el.id} sx={{ maxWidth: "100%", position: 'relative' }}>
                        {/* <CardActionArea onClick={() => {navigate('/details/' + category + '/' + el.id)}}> */}
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
                                // component="div"
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
        </>
    )
    // return data.map((el) => {
    //     return (
        //                 <Card key={el.id} >
        //                     <CardActionArea>
        //                         <CardMedia
        //                         component="img"
        //                         height="250"
        //                         image={el.images[0]}
        //                         alt={el.title}
        //                         />
        //                         <CardContent>
        //                         <Typography gutterBottom variant="h5" component="div">
        //                             {el.title}
        //                         </Typography>
        //                         <Typography variant="body2" color="text.secondary">
        //                             {el.description}
        //                         </Typography>
        //                         </CardContent>
        //                     </CardActionArea>
        //                     <CardActions>
        //                         <Button size="small" color="primary">
        //                         Add to cart
        //                         </Button>
        //                     </CardActions>
        //                 </Card>
    //             
    //     )
    // })
}

export default ItemsList;