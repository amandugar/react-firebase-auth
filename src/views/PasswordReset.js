import Error from "../components/Error"
import Form from "../components/Form"
import Input from "../components/Input"
import Links from "../components/Links"
import SubmitButton from "../components/SubmitButton"

const PasswordResetView = ({ handlePasswordReset, emailRef, error }) => {
  return (
    <div className="flex w-full flex-col h-full items-center justify-center">
      <Form handler={handlePasswordReset}>
        <Input
          reference={emailRef}
          placeholder={"Email"}
          type="email"
          name="email"
        />
        <SubmitButton>Reset Password</SubmitButton>
        <Links path={"/"}>Home</Links>
        <p>{error}</p>
      </Form>
    </div>
  )
}

export default PasswordResetView
