export default function ImageOptionSkeleton() {
  return (
    <>
      {[...Array(5)].map((_, index) => (
        <div
          className="h-[100px] w-[100px] rounded-md animate-pulse bg-gray-300"
          key={index}
        ></div>
      ))}
    </>
  );
}
