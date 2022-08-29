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

const ItemsList = ({ category }) => {
    const { data, isLoading, isError } = useQuery('repoData', async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await response.json();
        console.log(data)
        return data.products;
      });
      if (isLoading) {
        return '<div>Loading...</div>';
      }
      if (isError) {
        return '<div>Error</div>';
      }
      return  (
        <Grid container rowSpacing={4} columnSpacing={2}>
            {data.map((el) => {
                return (
                <Grid item sx={12} sm={6} md={4}>
                    <Card key={el.id} sx={{ maxWidth: "100%", position: 'relative' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="250"
                            image={el.images[0]}
                            alt={el.title}
                            />
                            <CardContent sx={{overflow: 'hidden' }}>
                            <Typography 
                            gutterBottom 
                            variant="h5" 
                            component="div"
                            sx={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOveflow: 'ellipsis'
                            }}
                            >
                                {el.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" className='items-overflow'>
                                {el.description}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            Add to cart
                            </Button>
                        </CardActions>
                        <Box sx={{ position: 'absolute', top: '15px', right: '15px', backgroundColor: '#121212'  }}>
                        <Typography variant="body1" component="span" p={3}>
                            {el.price}$
                        </Typography> 
                        </Box>
                    </Card>
                </Grid>
            )
            })}
        </Grid>
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