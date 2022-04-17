import Skeleton from "react-loading-skeleton";
export default function LoadingSkeletonPhotos({ count }) {
  return <Skeleton className="-z-1" count={count} width="100%" height={400} />;
}
