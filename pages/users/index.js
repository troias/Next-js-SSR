import React from 'react'
import Link from 'next/link'

 const UserProfile = (props) => {
    return (
        <div>
            <Link href={`users/${props.username}`}>
            {props.username}
            </Link>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    console.log(ctx)
    return {
        props: {
            username: "max"
        }
    }
}

export default UserProfile
