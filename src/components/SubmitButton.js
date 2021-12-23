const SubmitButton = ({ children }) => {
  return (
    <button
      type="submit"
      className="py-2 px-4 bg-lime-700 text-white my-2 rounded"
    >
      {children}
    </button>
  )
}

export default SubmitButton
