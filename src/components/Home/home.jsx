import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import Header from "../Header/header";

const Home = () => {
  const history = useHistory();

  const onClick = () => {
    localStorage.clear();
    history.push(ROUTES.LOGIN);
  };
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <section>
        <form id="skeleton">
          <button type="submit" onClick={onClick}>
            would you like to Sign Out?
          </button>
        </form>
        {/* <Home /> */}
        <Skeleton height={320} width={400} />
      </section>
    </SkeletonTheme>
  );
};

export default Home;
