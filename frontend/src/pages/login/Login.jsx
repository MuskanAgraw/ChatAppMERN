import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-gray-800">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block text-gray-400">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
            disabled={loading}
          >
            {loading ? <span className="loader"></span> : "Login"}
          </button>
        </form>

        <p className="mt-4 text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;