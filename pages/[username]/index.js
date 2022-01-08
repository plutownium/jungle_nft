import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <Header />
      <div>
        <p>Post: {username}</p>
      </div>
      <Footer />
    </div>
  );
}
