import { useState } from 'react';
import ItemsList from '../ItemsList/ItemsList';
import ProductsPage from '../ProductsPage/ProductsPage';

const Furniture = () => {
    const [itemClick, setItemClick] = useState();
    const getHandleClick = (click) => {
        setItemClick(click)
    }
    return (
        <ProductsPage
        title='Furniture'
        dcrs="We don't sell furniture, we sell feelings!"
        item={<ItemsList category={'furniture'} handleClick={getHandleClick}/>}
        handleClick={itemClick}
        />
    )
}

export default Furniture;