import "./App.css";
import Card from "./components/Card";

function App() {
  const products = [
    {
      productName: "Samsung",
      price: 500,
      image: "./src/assets/apple-watch.png",
    },
    {
      productName: "Apple",
      price: 2000,
      image: "./src/assets/apple-watch.png",
    },
    { productName: "Vivo", price: 200, image: "" },
  ];

  return (
    <>
      {products.map((product) => {
        return (
          <Card
            productname={product.productName}
            price={product.price}
            productImage={product.image}
          />
        );
      })}
    </>
  );
}

export default App;
