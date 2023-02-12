import AspectRatioBox from '@app/components/AspectRatioBox'

const Skeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-5 mt-14 recommended-skeleton">
      {new Array(8).fill(0).map((_, idx) => (
        <div key={idx}>
          <AspectRatioBox aspectRatio="13/8" className="animate-pulse bg-gray-400 rounded-md" />
          <div className="h-11 mt-1 animate-pulse bg-gray-400 rounded-md" />
          <div className="h-4 w-40 mt-1 animate-pulse bg-gray-500 rounded-md"></div>
        </div>
      ))}
    </div>
  )
}

export default Skeleton
