import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
        <Image
            src="https://images.pexels.com/photos/17514561/pexels-photo-17514561/free-photo-of-wooden-shed-near-water-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
            alt="A view of a staircase with ornate carvings"
            className={styles.img}
            fill
            
            priority={true}
          />
        </div>
        <span className={styles.date}>01.08.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.tittle}>Tittle</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quod
          aspernatur omnis dolorum quis facere numquam autem adipisci. Obcaecati
          porro, nostrum doloremque odit exercitationem voluptatum iste tempora
          voluptatibus rerum a!
        </p>
        <Link className={styles.link} href="/blog/post">
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
