import { ProductList } from "../components/ProductList";
import { getProducts } from "../fakeAPI";
import { SearchBox } from "../components/SearchBox";

export const Products = () => {
    const products = getProducts();
    return (
        <main>
            <SearchBox/>
            <ProductList products={products} />
        </main>
    )
}