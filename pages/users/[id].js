export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map((info) => {
        return {
            params: {id: info.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json();

    return {
        props: {users: data}
    }
}

const Details = ({users}) => {
    return ( 
    <div>
        <h1>User Details Page</h1>
        <h3>{users.name}</h3>
        <p>{users.email}</p>
        <p>{users.website}</p>
        <p>{users.address.city}</p>
    </div> );
}
 
export default Details;