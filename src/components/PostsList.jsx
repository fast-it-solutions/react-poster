import NewPost from './NewPost';
import Post from './Post';
import classes from './PostsList.module.css';

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Kilian" body="React.js is awesome!" />
        <Post author="Max" body="Node.js is awesome!" />
      </ul>
    </>
  );
}

export default PostsList;
