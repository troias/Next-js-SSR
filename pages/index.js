import fs from 'fs/promises'
import path from 'path'
import { useRouter } from 'next/router'
import Link from 'next/link'

function HomePage(props) {
  console.log("props", props)
  return (
    <ul>
      {props.products.map(product =>
      <Link href={product.id}>
        <li key={product.id}>{product.title}</li>
      </Link>
      )}
    </ul>
  );
}

export const getStaticProps = async (ctx) => {
  console.log("regenerating")
  console.log("ctx", ctx)
  const filePath = path.join(process.cwd(), "dummy-backend.json")
  const req = await fs.readFile(filePath)
  const data = JSON.parse(req)

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
