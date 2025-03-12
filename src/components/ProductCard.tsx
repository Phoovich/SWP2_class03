import styles from "./productCard.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/room.jpg"}
          alt="Product Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>
        <h3>Stardust Terrace</h3>
      </div>
    </div>
  );
}
