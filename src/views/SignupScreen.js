import Error from "../components/Error"
import Form from "../components/Form"
import Input from "../components/Input"
import Links from "../components/Links"
import SubmitButton from "../components/SubmitButton"

const SignupScreen = ({
  handleSignup,
  emailRef,
  passwordRef,
  fullNameRef,
  error,
}) => {
  return (
    <div className="flex w-full flex-col h-full items-center justify-center">
      <Form handler={handleSignup}>
        <Error>{error}</Error>
        <Input
          reference={fullNameRef}
          placeholder={"Full Name"}
          type="text"
          name="fullName"
        />
        <Input
          reference={emailRef}
          placeholder={"Email"}
          type="email"
          name="email"
        />
        <Input
          reference={passwordRef}
          placeholder={"Password"}
          type="password"
          name="password"
        />
        <SubmitButton>Signup</SubmitButton>
        <Links path={"/"}>Home</Links>
      </Form>
    </div>
  )
}

export default SignupScreen
