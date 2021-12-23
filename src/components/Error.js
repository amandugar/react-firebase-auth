const Error = ({ children }) => {
  return (
    <div className="w-96 mx-4">
      <div className="text-red-500 text-center">
        <p>{children}</p>
      </div>
    </div>
  )
}

export default Error
