import Links from "../components/Links"

const ProfileScreen = ({ name, email, signout }) => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-center">
      <h3 className="text-2xl py-4">Welcome</h3>
      <h2 className="text-lg py-2">Name: {name}</h2>
      <h2 className="text-lg py-2">Email: {email}</h2>
      <button
        className="bg-red-500 rounded my-4 py-2 px-6 text-white"
        onClick={() => signout()}
      >
        Sign Out
      </button>
      <Links path="/">Home</Links>
    </div>
  )
}

export default ProfileScreen
