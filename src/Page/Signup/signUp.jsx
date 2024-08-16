import { updateProfile } from 'firebase/auth';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import signup from '../../assets/login.png';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    setLoading(true);
    setError(''); // Clear any previous errors

    try {
      const result = await createUser(email, password);
      const user = result.user;

      // Update user's display name
      await updateProfile(user, { displayName: name });

      console.log(user);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-48">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <img src={signup} alt="Sign Up" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignUp}>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <input
                type="submit"
                className="btn border-btnrr hover:bg-btnrr text-lg hover:text-neutral-950 text-[#FF3811] m-10"
                value={loading ? 'Signing Up...' : 'Sign Up'}
                disabled={loading}
              />
            </div>
          </form>
          <p className="text-center mb-10 my-4">
            Already have an Account?{' '}
            <Link to="/login" className="hover:text-btnrr font-bold my-11">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
