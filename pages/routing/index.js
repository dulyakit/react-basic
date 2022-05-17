import Link from 'next/link'
import post from './post.json'

function postList() {
    return (
        <div>
            <h1>Welcome to Post List</h1>
            <ul>
                {Object.entries(post).map((item, id) => {
                    // console.log(item[1].title);
                    return (
                        <li key={id}>
                            <Link href={"/routing/" + item[0]}>
                                {item[1].title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default postList