import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow bg-white">
      <h1 className="text-xl font-bold text-indigo-600">
        Social Media Trend Analyzer
      </h1>

      <div className="space-x-4">
        <Link to="/login" className="text-gray-600 hover:text-indigo-600">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}