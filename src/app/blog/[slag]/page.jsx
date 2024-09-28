import Image from "next/image";
import styles from "./singlePost.module.css";

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27334083/pexels-photo-27334083/free-photo-of-a-view-of-a-staircase-with-ornate-carvings.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="Image description"
          className={styles.img}
          fill
        />
        <Image src="" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.tittle}>Tittle</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27334083/pexels-photo-27334083/free-photo-of-a-view-of-a-staircase-with-ornate-carvings.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTittle}>published</span>
            <span className={styles.detaiValue}>01.08.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quasi voluptates reprehenderit assumenda ab vel modi at fuga repellendus eaque laboriosam libero culpa ex architecto unde voluptas, deleniti enim inventore?
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
