import Link from 'next/link'
import { useEffect, useState } from "react"
import { getData } from '../auxFunctions/getData'


function HomePage(props) {

  const [products, setProducts] = useState([])

  const fetchInitialData = async () => {
    const req = await fetch('/dummy-backend.json')
    const res = await req.json()
    console.log("res", res.products)
    // const filteredData = res.filter(x => x.id === 1)
    setProducts(res.products)
  }
  
  useEffect(() => {
 
    fetchInitialData()
  }, [])

  if (!props.products) {
    return <p>Loading</p>
  }

  return (
    <>
      <ul>
        <div>
          <h1>Loaded with useEffect</h1>
          {products.map((product => <li key={product.id}>{product.title} </li>))}
        </div>
        <br/>
        break 
       
        {props.products.map(product =>
          <Link href={product.id} style={{

          }}>
            <li key={product.id} style={{
              textDecoration: "underline",
              cursor: "grab"
            }}>{product.title}</li>
          </Link>

        )}
      </ul>
      <Link href="/users">
        <h1>users </h1>
      </Link>
      <Link href="/last-sales">
        <h1>Sales </h1>
      </Link>

    </>


  );
}

export const getStaticProps = async (ctx) => {

  const data = await getData()

  // if (data.products.length > 0) {
  //   return {
  //     notFound: true
  //   }
  // }

  if (!data) {
    return {
      redirect: {
        destination: '/no-data'
      }
    }
  }

  return {
    props: {
      products: data.products
    },
    revalidate: 10,



  }
}


export default HomePage
