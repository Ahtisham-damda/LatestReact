import { useState } from "react";

type Product = {
    id: number;
    title: string;
    price : number;
    description : string;
    image : string;
}

function ProductList(){
    const [product,setProducts] = useState<Product[]>([])

    const fetchProducts = async () =>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
    }
    return(
        <div className="container mb-4">
            <h2 className="text-danger mb-2">Product List</h2>
            <button className="btn btn-success" onClick={fetchProducts}>View Products</button>
            <ul className="mb-1 list-group">
                {product.map((prod) => (
                    <li key={prod.id} className="list-group-item">
                        <h2>ID : {prod.id}</h2>
                        <h3>Title : {prod.title}</h3>
                        <p>Price : {prod.title}</p>
                        <p>Description : {prod.description}</p>
                        <p><img src={prod.image} alt={prod.title}/></p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList;