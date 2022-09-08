import { useState } from 'react';
import ItemsList from '../ItemsList/ItemsList';
import ProductsPage from '../ProductsPage/ProductsPage';

const Deco = () => {
    const [itemClick, setItemClick] = useState();
    const getHandleClick = (click) => {
        setItemClick(click)
    }
    return (
        <ProductsPage
        title='Decoration'
        dcrs='Make room for better living'
        item={<ItemsList category={'home-decoration'} handleClick={getHandleClick}/>}
        handleClick={itemClick}
        />
    )
}

export default Deco;