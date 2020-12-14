const Posts = ({result: query}) => {
    return (
        <>
            <h1>serverSideprops</h1>
            {
                query.map((q, index)=> (
                    <div key={index}>
                        <h3>{q.id}</h3>
                        <p>{q.title}</p>
                        <p>{q.body}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/?q=${context.params.query}`)
    const json = await res.json()
    const posts = json
    return {
        props: {
            result: posts
        }
    }
}

export default Posts