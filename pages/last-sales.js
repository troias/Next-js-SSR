import React, { useEffect, useState } from 'react'

const LastSales = () => {
    const [sales, setSales] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getIntialData = async () => {
            setLoading(true)
            const req = await fetch("https://next-js-example-8e3b6-default-rtdb.firebaseio.com/sales.json")
            const res = await req.json()
            console.log("response", res)
            let data = []
            for (const x in res) {

                data.push({
                    id: x,
                    username: res[x].username,
                    volume: res[x].volume
                })
            }

            setSales(data)
            setLoading(false)
        }

        getIntialData()


    }, [])

    if (loading) {
        return <p>Loading</p>
    }
    console.log("sales", sales)

    return (
        <div>
            <h1 >Last sales</h1>
            {!loading && sales.map(sales => {
                return <><li>{sales.username}</li>
                    <li>{sales.volume}</li> </>
            })}
        </div>
    )
}

export default LastSales