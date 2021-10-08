import React from 'react'
import {useRouter} from 'next/router'

 const UserIdPage = (props) => {
     const router = useRouter()
    return (
        <div>   
            <h1> UserIdPage </h1>
            <h1>{props.id}</h1>
           
            <btn onClick={() => {router.push("/")}} style={{
                backgroundColor: "blue", color: "white"
             }}> Back</btn>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {

    const {params} = ctx

    const userId = params.uid

    return {
        props: {
            id: userId
        }
    }
}

export default UserIdPage
