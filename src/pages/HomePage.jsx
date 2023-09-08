import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const HomePage = () => {
  return (
    <div>
      <PageNav />
      <h1>Worl Wise Home page</h1>
      <Link to="/pricing">Pricing</Link>
    </div>
  );
};

export default HomePage;
