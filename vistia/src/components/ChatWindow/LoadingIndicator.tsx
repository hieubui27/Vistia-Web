const LoadingIndicator = () => {
  return (
    <div className="flex items-center justify-start space-x-2 text-gray-400 text-sm">
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-.2s]"></div>
      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-.4s]"></div>
    </div>
  )
}

export default LoadingIndicator
