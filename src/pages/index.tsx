import Head from "next/head";
import { GetServerSideProps } from "next";

import { GridArea, Header, ShoppingCart } from "@/components";

import fakeStoreApi from "@/utils/fakeStoreApi";

import { Product } from "@/types/product";
import { useCartContext } from "@/contexts/CartContext";

type Props = {
  products: Product[]
}

function Index({ products }: Props) {
  const { isOpen } = useCartContext();

  return (
    <>
      <Head>
        <title>Fake Store App</title>
      </Head>
      <Header />
        {isOpen &&
          <ShoppingCart />
        }
      <GridArea products={products} />
    </>
  )
}

export default Index;


export const getServerSideProps: GetServerSideProps = async () => {
  const products: Product[] = await fakeStoreApi.getProducts();

  return {
    props: {
      products
    }
  }
}

