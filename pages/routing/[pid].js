import postList from './post.json'

// const Post = props => {
//     // console.log(props);
//     return (
//         <>
//             <style jsx global>{`
//                 h1{
//                     background-color:yellow
//                 }
//             `}</style>
//             <h1>Title: {props.post.title}</h1>
//             <p>Content: {props.post.content}</p>
//         </>
//     )
// }

// Post.getInitialProps = ({ query }) => {
//     // console.log(query);
//     return {
//         post: postList[query.pid]
//     }
// }

const Post = (props) => {
    console.log(props.post);
    return (
        <>
            <h1>Title: {props.post.title}</h1>
            <p>Content: {props.post.content}</p>
        </>
    )
}

export async function getServerSideProps(context) {
    console.log(context.query.pid);
    return {
        props: { post: postList[context.query.pid] }, // will be passed to the page component as props
    }
}


export default Post