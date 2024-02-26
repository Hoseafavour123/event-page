

const Register = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="register"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Register for the{' '}
        <span className="text-coral-red">LinkedIn Leadership </span> Academy
      </h3>
      <button className="w-auto bg-red-500 hover:bg-red-300 text-white font-bold py-5 px-9 rounded focus:outline-none focus:shadow-outline">
        <a href="">Register Now</a>
      </button>
    </section>
  )
}

export default Register
