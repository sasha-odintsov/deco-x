import ItemsList from '../ItemsList/ItemsList';
import ProductsPage from '../ProductsPage/ProductsPage';

const Deco = () => {
    return (
        <ProductsPage
        title='Decoration'
        dcrs='Make room for better living'
        item={<ItemsList category={'home-decoration'}/>}
        />
    )
}

export default Deco;