import Image from "next/image";

import styles from "./Card.module.css";

const randomPic = "https://picsum.photos/200/300";

export async function getStaticProps(context) {
  const res = await fetch(randomPic);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: data, username: "bowTiedSomeone", caption: "asdf" }, // will be passed to the page component as props
  };
}

export default function Card(props) {
  console.log(props);
  return (
    <div className={styles.fadeIn}>
      <h2>{username}</h2>
      <p>{caption}</p>
      <Image src={data} width={60} height={60} />
    </div>
  );
}
