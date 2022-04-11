import Skeleton from "react-loading-skeleton";
export default function LoadingSkeletonPhotos({ count }) {
  return <Skeleton count={count} width="100%" height={400} />;
}
