import { useSelector } from 'react-redux';
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
// import { ButtonGroup, Button } from '@mui/material';
import _ from 'lodash';

const Cart = () => {
    const items = useSelector((state) => {
        const groupItems = _.groupBy(state.cart, 'id');
        const newList = Object.keys(groupItems).map((key) => {
          return {
            id: key,
            title: groupItems[key][0].title,
            image: groupItems[key][0].image,
            count: groupItems[key].length,
            price: groupItems[key][0].price * groupItems[key].length,
            total: groupItems[key].price
          };
        });
        return newList;
    });
    console.log(items)
    return (
        <Container maxWidth="lg" sx={{ my: '150px' }}>
            <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
                <Typography variant='h4'>Cart</Typography>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {items.map((el) => {
                    return (
                        <>
                        <ListItem alignItems="flex-start"
                        secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                        }
                        >
                            <ListItemAvatar>
                                <Avatar src={el.image} alt={el.title} variant='square' sx={{ width: 60, height: 60, mr: 2 }}/>
                            </ListItemAvatar>
                            <ListItemText primary={'code: ' + el.id} secondary={
                                <>
                                <Typography>
                                {el.title}
                                </Typography>
                                <Box>
                                <Typography>
                                quantity: {el.count}
                                </Typography>
                                {/* <ButtonGroup variant="text" aria-label="text button group">
                                    <Button onClick={() => {return el.count + 1}}>+</Button>
                                    <Button>-</Button>
                                </ButtonGroup> */}
                                </Box>
                                <Typography>
                                price: {el.price}$
                                </Typography>
                                </>
                            }>
                            </ListItemText>
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        </>
                    )
                })}
                </List>
                <Typography>Total: {items.total}</Typography>
            </Box>
        </Container>
    )
}

export default Cart;