import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonComponent = () => (
  <SkeletonTheme color="#202020" highlightColor="#444">
    <section>
      <Skeleton height={50} width={50} />
    </section>
  </SkeletonTheme>
);
