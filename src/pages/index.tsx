import Head from "next/head";
import { GetServerSideProps } from "next";

import { Card, GridArea, Header } from "@/components";

import fakeStoreApi from "@/utils/fakeStoreApi";
import { Product } from "@/types/product";

type Props = {
  products: Product[]
}

function Index({ products }: Props) {
  return (
    <>
      <Head>
        <title>Fake Store App</title>
      </Head>
      <Header />
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

