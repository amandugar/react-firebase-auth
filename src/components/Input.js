const Input = ({ reference, type, name, placeholder }) => {
  return (
    <input
      ref={reference}
      type={type}
      name={name}
      placeholder={placeholder}
      className="border my-2 px-6 py-2 rounded"
      important="true"
    />
  )
}

export default Input
