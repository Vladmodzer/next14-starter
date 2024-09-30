import Image from "next/legacy/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/PostUser.jsx"
const getData = async (slug) => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  //fetch("url",{cache: "no-store"}) for oft data abdating
  
  if (!req.ok) {
    throw new Error("data SinglePostPageerror");
  }
  return req.json();
};
const getUserData = async (userId) => {
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  if (!req.ok) {
    throw new Error("Error fetching user data");
  }

  const user = await req.json();
  return user;
};
async function SinglePostPage({ params }) {
  // console.log(params); = slag adress
  const {slug} = params
  const post = await getData(slug);
  const user = await getUserData(post.userId)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27334083/pexels-photo-27334083/free-photo-of-a-view-of-a-staircase-with-ornate-carvings.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="post photo"
          className={styles.img}
          priority
          layout="fill"
        />
      </div>
      <div className={styles.textContainer}>
        <div>

        <h1 className={styles.title}>{post.title}</h1>
        </div>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27334083/pexels-photo-27334083/free-photo-of-a-view-of-a-staircase-with-ornate-carvings.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            className={styles.avatar}
            width={50}
            height={50}
            priority
            alt="avatar"
          />
           {/* <div className={styles.detailText}>
            <span className={styles.detailTittle}>{user.id}</span>
            <span className={styles.detaiValue}>{user.name}</span>
          </div> */}
          <PostUser user={user}/>
          <div className={styles.detailText}>
            <span className={styles.detailTittle}>published</span>
            <span className={styles.detaiValue}>01.08.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
