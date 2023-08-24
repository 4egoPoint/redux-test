import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllPosts } from "./postSlice";


const PosteList = () => {
   const posts = useSelector(selectAllPosts)

   const renderedPosts = posts.map(post => (
      <article key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.content.substring(0,100)}</p>
      </article>
   ))

   return (
      <section>
         <h2>posts</h2>
         {renderedPosts}
      </section>
   )
}

export default PosteList