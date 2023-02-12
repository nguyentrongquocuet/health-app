const Skeleton = () => {
  return (
    <div className="grid grid-cols-4 gap-2 font-body meal-history-skeleton">
      {new Array(8).fill(0).map((_, idx) => (
        <div key={idx} className="aspect-square bg-gray-400 animate-pulse" />
      ))}
    </div>
  )
}

export default Skeleton
