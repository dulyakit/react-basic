import { useRouter } from 'next/router'
import post from './post.json'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query

    //Debug ID  
    // console.log(pid) 

    const posts = post[pid]
    if (!posts) return <p>data not found</p>

    return (
        <>
            <h4>PostID: {pid}</h4>
            <h1>Title: {posts.title}</h1>
            <p>Content: {posts.content}</p>
        </>
    )

}

// export const getStaticPaths: GetStaticPaths = async () => {
//     return {
//         paths: [
//             { params: { id: '1' } }
//         ],
//         fallback: false
//     }
// }

export default Post