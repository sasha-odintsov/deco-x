import { useState } from 'react';
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
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Snackbar from '@mui/material/Snackbar';

const ProductDetails = ({ category }) => {
    let { id } = useParams();
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const { data, isLoading, isError } = useQuery('details-' + category + id, () => {
        return fetch(`https://dummyjson.com/products/category/${category}`)
        .then((resp) => resp.json())
        .then((data) => data.products)
        .then((item) => {
            return item.find((el) => {
                // eslint-disable-next-line eqeqeq
                return el.id == id
            })
        }) 
      });
      if (isLoading) {
        return (
            <Box sx={{ minHeight: '40vh', mt: '250px', display: 'flex', justifyContent: 'center' }}>
                <CircularProgress color="primary" />
            </Box>
        );
      }
      if (isError) {
        return (
            <Box sx={{ minHeight: '40vh', mt: '250px'}}>
                <Typography textAlign='center'>Error</Typography>
            </Box>
        );
      }
      const steps = data.images;
      const maxSteps = steps.length;
      return (
        <Paper>
            <Container maxWidth="lg" sx={{ py: '150px' }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={6} sx={{display: 'flex', justifyContent: 'center' }}>
                        <Box width='95%'>
                            <Paper
                            square
                            elevation={0}
                            sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'transparent',
                            }}
                            >
                                <Typography variant='h6' mb={1}>{data.title}</Typography>
                            </Paper>
                            <Box sx={{ width: '100%', maxHeight: 500, overflow: 'hidden', }}>
                                <Box 
                                component="img" 
                                sx={{ 
                                    width: '100%', 
                                    display: 'block', 
                                }} 
                                src={steps[activeStep]} 
                                alt={data.title}
                                />
                            </Box>
                            <MobileStepper
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{ bgcolor: 'transparent' }}
                            
                            nextButton={
                              <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                              >
                                Next
                                  <KeyboardArrowRight />
                              </Button>
                            }
                            backButton={
                              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                  <KeyboardArrowLeft />
                                Back
                              </Button>
                            }
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} pb={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end', mb: 3, mt: '50px' }}>
                            <Typography color='text.secondary' variant='body2' component='span' mb={1}>
                                Code: {data.id}
                            </Typography>
                            <Rating name="read-only" value={data.rating} readOnly />
                        </Box>
                        <Box>
                            <Typography color='text.secondary' variant='body2'>Brand</Typography>
                            <Typography mb={3}>{data.brand}</Typography>
                            <Typography color='text.secondary' variant='body2'>Description</Typography>
                            <Typography mb={7}>{data.description}</Typography>
                        </Box>
                        <Box >
                            <Divider />
                            <Box px={3} mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Typography component='span' py='4px' >{data.price}$</Typography>
                                <Button
                                onClick={() => {
                                    dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: {
                                            id: data.id,
                                            image: data.images[0],
                                            title: data.title,
                                            price: data.price
                                        }
                                    })
                                    handleClick()
                                }}
                                >Add to cart</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Snackbar
                open={open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                onClose={handleClose}
                message="Item added to cart"
                />
            </Container>
        </Paper>
      )
}

export default ProductDetails;