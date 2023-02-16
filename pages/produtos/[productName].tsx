import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const { productName } = router.query;

  return <h1>{productName}</h1>;
};

export default Product;
