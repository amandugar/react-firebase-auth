import Links from "../components/Links"

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center center w-full h-full">
      {/* <h1 className="text-4xl text-center">Welcome to the Home Page</h1> */}
      <div className="flex flex-row items-center justify-center w-full h-full">
        <Links path={"/accounts/sign-in"}>Sign In</Links>
        <Links path={"/accounts/email-signup"}>Sign Up</Links>
        <Links path={"/accounts/password/reset"}>Reset Password</Links>
      </div>
    </div>
  )
}

export default Home
