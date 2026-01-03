export default function PortfolioSection() {
  const portfolioItems = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Stickers",
    },

    {
      id: 2,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Crochet",
    },

    {
      id: 3,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Stickers",
    },

    {
      id: 4,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Stickers",
    },

    {
      id: 5,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Prints",
    },

    {
      id: 6,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      image: "https://placehold.co/600x400",
      category: "Keychains",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-xl mb-10">Our Work</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow bg-white/85"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <div className="">
                  <div className="text-pink-300 mb-1 text-xl">
                    {item.category}
                  </div>

                  <h4 className="mb-1">{item.title}</h4>
                  <div className="text-purple-800 mb-1">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
