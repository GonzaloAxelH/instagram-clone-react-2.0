import React from "react";
import usePhotos from "../../hooks/useFotos";
import Post from "../Post/Post";
import LoadingSkeletonPhotos from "../Skeletons/LoadSkeletonPhotos";
export default function Timeline() {
  const { photos } = usePhotos();
  console.log(photos);
  return (
    <div className="container col-span-2 mt-4 mx-auto">
      {photos === null && <LoadingSkeletonPhotos count={4} />}
      {photos &&
        photos.map((content, index) => {
          return <Post key={index} content={content} />;
        })}

      {photos && photos.length == 0 && (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
}
