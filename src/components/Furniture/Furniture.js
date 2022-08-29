import ItemsList from '../ItemsList/ItemsList';
import ProductsPage from '../ProductsPage/ProductsPage';

const Furniture = () => {
    return (
        <ProductsPage
        title='Furniture'
        dcrs="We don't sell furniture, we sell feelings!"
        item={<ItemsList category={'furniture'}/>}
        />
    )
}

export default Furniture;