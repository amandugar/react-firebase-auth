import Error from "../components/Error"
import Form from "../components/Form"
import Input from "../components/Input"
import Links from "../components/Links"
import SubmitButton from "../components/SubmitButton"

const PasswordResetView = ({
  handlePasswordReset,
  emailRef,
  error,
  message,
}) => {
  return (
    <div className="flex w-full flex-col h-full items-center justify-center">
      <Form handler={handlePasswordReset}>
        <Error>{error}</Error>

        <Input
          reference={emailRef}
          placeholder={"Email"}
          type="email"
          name="email"
        />
        <SubmitButton>Reset Password</SubmitButton>
        <Links path={"/"}>Home</Links>
        <p className="py-4">{message}</p>
      </Form>
    </div>
  )
}

export default PasswordResetView
