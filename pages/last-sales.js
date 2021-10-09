import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

const LastSales = () => {
    const [sales, setSales] = useState([])
    // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(false)
    const firebaseFetch = url => fetch(url).then((res) => res.json())
    const { data, error } = useSWR("https://next-js-example-8e3b6-default-rtdb.firebaseio.com/sales.json", firebaseFetch)

    console.log("data", data)

    useEffect(() => {
        if (data) {
            let transformedData = []
            for (const x in data) {
                transformedData.push({
                    id: x,
                    username: data[x].username,
                    volume: data[x].volume,
                })

            }
            setSales(transformedData)
        }
    }, [data])
    console.log("sales", sales)
    // useEffect(() => {
    //     const getIntialData = async () => {
    //         setLoading(true)
    //         const req = await fetch("https://next-js-example-8e3b6-default-rtdb.firebaseio.com/sales.json")
    //         const res = await req.json()
    //         console.log("response", res)
    //         let data = []
    //         for (const x in res) {

    //             data.push({
    //                 id: x,
    //                 username: res[x].username,
    //                 volume: res[x].volume
    //             })
    //         }

    //         setSales(data)
    //         setLoading(false)
    //     }

    //     getIntialData()


    // }, [])
    if (error) {
        return <p>error...</p>
    }

    if (!data || !sales) {
        return <p>Loading...</p>
    }



    console.log("sales", sales)

    return (
        <div>
            <h1 >Last sales</h1>
            {sales.map(sales => {
                return <ul key={sales.id}>
                    <li>{sales.username}</li>
                    <li>{sales.volume}</li> </ul>
            })}
        </div>
    )
}

export default LastSales