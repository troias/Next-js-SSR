function HomePage(props) {
  console.log("props", props)
  return (
    <ul>
      {/* {props.products.map(product =>
        <li>{product.title}</li>
      )} */}

      <li>Product 2</li>
      <li>Product 3</li>
    </ul>
  );
}

export const getStaticProps = async (ctx) => {

  const req = await fetch("/dummy-backend.json")
  const res = await req
 
  console.log("ctx", req)
  console.log("ctx", res)
  return {
    props: {
      products: res
    }

  }
}


export default HomePage
