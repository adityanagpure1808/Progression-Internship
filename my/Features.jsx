const features = [
  {
    title: "Multi-Platform Analysis",
    description: "Analyze trends from Facebook, LinkedIn, and Instagram.",
  },
  {
    title: "AI-Powered Reports",
    description: "Generate detailed reports using Tavily Research API.",
  },
  {
    title: "Sentiment Analysis",
    description: "Understand public opinion with sentiment insights.",
  },
  {
    title: "Interactive Chat",
    description: "Ask questions and explore reports using AI chat.",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">
        Key Features
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h4 className="text-xl font-semibold mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}