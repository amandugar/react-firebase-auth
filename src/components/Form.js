const Form = ({ handler, children }) => {
  return (
    <form
      className="flex w-full flex-col h-full items-center justify-center"
      onSubmit={e => handler(e)}
    >
      {children}
    </form>
  )
}

export default Form
