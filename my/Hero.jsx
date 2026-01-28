import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50 px-4">
      <h2 className="text-4xl font-bold mb-4">
        Analyze Social Media Trends with AI
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Generate AI-powered trend reports from Facebook, LinkedIn, and Instagram,
        and interact with them using intelligent chat.
      </p>

      <div className="space-x-4">
        <Link
          to="/signup"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded hover:bg-indigo-50"
        >
          Login
        </Link>
      </div>
    </section>
  );
}
