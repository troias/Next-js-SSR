import React from 'react'
import fs from 'fs/promises'
import path from 'path'

const ProductDetailPage = (props) => {
    console.log("ProductDetailPage", props)
    return (
        <div>
           <h1>{props.productDetail.title}</h1> 
           <p>{props.productDetail.desription}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
          { params: { pid: 'p1' } },
          { params: { pid: 'p2' } },
          { params: { pid: 'p3' } }
        ], fallback: false,
    }
}

export const getStaticProps = async (ctx) => {
    const productId = ctx.params.pid
    console.log("ProductDetailPageCtx", productId)
    const filePath = path.join(process.cwd(), "dummy-backend.json")
    const req = await fs.readFile(filePath)
    const data = JSON.parse(req)
    const product = data.products.find(x => x.id === productId)
    console.log("product", product)
    return {
        props: {
            productDetail: {
                title: product.title,
                desription: product.description,
            }
        }
    }
}
export  default ProductDetailPage