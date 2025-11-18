import "./ProductCard.css";

type Product = {
  name: string;
  detailspage: string;
  description: string;
  price: number;
  image: string;
};

const product: Product = {
  name: "Iphone 17 Pro Max",
  detailspage: "https://www.apple.com/iphone-17-pro-max",
  description:
    "The latest iPhone with advanced features and improved performance.",
  price: 1199,
  image: "https://www.apple.com/iphone-17-pro-max/image.jpg",
};

function ProductCard() {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h4 className="card-title text-warning">{product.name}</h4>
        <h5 className="card-subtitle text-secondary small mb-2">
          Price : ${product.price}
        </h5>
        <p className="card-text">{product.description}</p>
        <a
          href={product.detailspage}
          className="btn btn-primary w-100"
          target="_blank"
        >
          View Detail
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
