import { useContext } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => console.log(error));
};

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-48">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
          <img src={login} alt="Login" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-2">
              <input type="submit" className="btn border-btnrr hover:bg-btnrr text-lg hover:text-neutral-950 text-[#FF3811] m-10" value="Login" />
            </div>
          </form>
          <p className="text-center mb-10 my-4">
            Create a New Account <Link to="/signup" className="hover:text-btnrr font-bold my-11">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
