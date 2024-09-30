import styles from "./postUser.module.css";

function PostUser({user}) {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{user.id}</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
}

export default PostUser;
