import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('http://localhost:5000/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    function addProduct() {
        setProducts(currentProducts => currentProducts.concat(
            {
                id: currentProducts.length + 101,
                name: 'product' + (currentProducts.length + 1),
                price: 100.00 * (currentProducts.length + 1),
                brand: 'some brand',
                description: 'some desc',
                pictureUrl: 'http://picsum.photos/' + 10.00 * (currentProducts.length)

            }))
    }
    return (
        <>
            <ProductList products={products}></ProductList>
            <Button variant="contained" onClick={addProduct}>Add Producto</Button>
        </>
    );
}