import React from "react";

const services = [
  {
    title: "Bespoke Weddings",
    desc: "Transforming your love story into a breathtaking reality, across Australia’s most iconic backdrops.",
    icon: "fa-heart",
    img: "/leonardo-miranda-dvF6s1H1x68-unsplash.jpg",
  },
  {
    title: "Corporate Galas",
    desc: "Sophisticated event production that mirrors your brand’s excellence and fosters meaningful connections.",
    icon: "fa-building",
    img: "/al-elmes-ULHxWq8reao-unsplash.jpg",
  },
  {
    title: "Baby Showers",
    desc: "Celebrating new beginnings with beautifully styled gatherings, thoughtfully designed to welcome your little one in the most heartfelt way.",
    icon: "fa-baby",
    img: "/kelly-sikkema-IE8KfewAp-w-unsplash.jpg",
  },
  {
    title: "Bridal Parties",
    desc: "An unforgettable celebration dedicated to the bride-to-be, bringing together her closest circle for a day of elegance, laughter, and cherished memories.",
    icon: "fa-ring",
    img: "/sujan-khalifa-LO1lToLGGFA-unsplash.jpg",
  },
  {
    title: "Birthday Parties",
    desc: "From intimate milestone celebrations to grand soirées, we craft personalized birthday experiences that reflect your unique style and spirit.",
    icon: "fa-cake-candles",
    img: "/edvinas-ivanovas-mQ6q-1XAj6A-unsplash.jpg",
  },
  {
    title: "Anniversary Celebrations",
    desc: "Honoring your journey together with a beautifully curated event that reflects your love, milestones, and shared memories.",
    icon: "fa-champagne-glasses",
    img: "/laurent-yasiel-ZdenpJd5zF4-unsplash.jpg",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-800 mb-4">
            Our Expertise
          </h2>
          <div className="h-1 w-24 bg-maven-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white flex items-center justify-center rounded-full text-maven-gold shadow-lg">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-4 text-slate-800">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <a
                  href="#contact"
                  className="text-maven-gold text-sm font-bold uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform"
                >
                  Explore Service{" "}
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
