import { useSelector, useDispatch } from 'react-redux';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import _ from 'lodash';

const Cart = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => {
        const groupItems = _.groupBy(state.cart, 'id');
        const newList = Object.keys(groupItems).map((key) => {
          return {
            id: key,
            title: groupItems[key][0].title,
            image: groupItems[key][0].image,
            count: groupItems[key].length,
            price: groupItems[key][0].price * groupItems[key].length
          };
        });
        return newList;
    });
    console.log(items);
    const total = items.reduce((total, amound) => total + amound.price, 0)
    return (
        <Container maxWidth="lg" sx={{ margin: 'auto' }}>
            <Box sx={{ maxWidth: '500px', margin: '150px auto' }}>
                <Typography variant='h4' mb={2}>Cart</Typography>
                {!items.length && 
                <Typography color='text.secondary' my={5} textAlign='center'>Cart is empty</Typography>
                }
                <List sx={{ width: '100%' }}>
                {items.map((el) => {
                    return (
                        <ListItem 
                        key={el.id}
                        alignItems="flex-start"
                        secondaryAction={
                        <IconButton 
                        edge="end" 
                        aria-label="delete" 
                        onClick={() => {
                            dispatch({
                                type: 'DELETE',
                                payload: {
                                    id: el.id
                                }
                            })
                        }}>
                            <DeleteIcon />
                        </IconButton>
                        }
                        >
                            <ListItemAvatar sx={{ mr: '20px' }}>
                                <Avatar src={el.image} alt={el.title} variant='square' sx={{ width: 60, height: 60 }}/>
                            </ListItemAvatar>
                            <ListItemText >
                                <Typography>
                                code: {el.id}
                                </Typography>
                                <Typography mt={1} color='text.secondary'>
                                {el.title}
                                </Typography>
                                <Box component='span' sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography color='text.secondary'>
                                    quantity: 
                                    </Typography>
                                    <ButtonGroup component='span' variant="text" aria-label="text button group" sx={{ alignItems: 'center' }}>
                                        <IconButton onClick={() => {return el.count + 1}}>
                                            <AddCircleOutlineIcon/>
                                        </IconButton>
                                        <Typography component='span'>{el.count}</Typography>
                                        <IconButton>
                                            <RemoveCircleOutlineIcon/>
                                        </IconButton>
                                    </ButtonGroup>
                                </Box>
                                <Typography pb={3}>
                                price: {el.price}$
                                </Typography>
                                <Divider />
                            </ListItemText>
                        </ListItem>                        
                    )
                })}
                </List>
                <Box mt='15px'>
                    <Typography textAlign='end'>Total: {items.length ? total : 0}$</Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Cart;