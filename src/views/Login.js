import Error from "../components/Error"
import Form from "../components/Form"
import Input from "../components/Input"
import Links from "../components/Links"
import SubmitButton from "../components/SubmitButton"

const LoginScreen = ({ handleSignin, error, emailRef, passwordRef }) => {
  return (
    <>
      <Form handler={handleSignin}>
        {error && <Error>{error}</Error>}
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
        <SubmitButton>Signin</SubmitButton>
        <Links path={"/"}>Home</Links>
      </Form>
    </>
  )
}

export default LoginScreen
