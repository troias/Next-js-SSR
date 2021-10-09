import React from 'react'
import {useRouter} from 'next/router'

import { getData } from '../../auxFunctions/getData'

const ProductDetailPage = (props) => {
    const router =useRouter()
    console.log("ProductDetailPage", props)

    if (!props.productDetail) {
        return <p>Loading</p>
    }

    return (
        <div>
            <h1>{props.productDetail.title}</h1>
            <p>{props.productDetail.description}</p>
            <btn onClick={() => { router.push("/") }} style={{
                backgroundColor: "blue", color: "white"
            }}> Back</btn>
        </div>
    )
}



export const getStaticPaths = async (ctx) => {


    const data = await getData()

    // data.products.map(x => ({
    //     params: {
    //         pid: x.id
    //     }
    // }))

    const ids = data.products.map(product => product.id)
    const params = ids.map(id => ({ params: { pid: id } }))

    return {
        paths: params, fallback: true,
    }

    // [
    //     { params: { pid: 'p1' } },
    //     { params: { pid: 'p2' } },
    //     { params: { pid: 'p3' } }
    //   ]
}

export const getStaticProps = async (ctx) => {

    const productId = ctx.params.pid
    const data = await getData()
    const product = data.products.find(x => x.id === productId)

    if (!product) {
        return { notFound: true }
    }

    return {
        props: {
            productDetail: product
        }
    }
}



export default ProductDetailPage