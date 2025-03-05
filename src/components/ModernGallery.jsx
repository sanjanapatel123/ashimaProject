import React, { useEffect } from "react";
import design1 from "../assets/Design1.jpg";
import design2 from "../assets/Design2.jpg";
import design3 from "../assets/Design3.jpg";
import design4 from "../assets/Design4.jpg";

const ModernMasonryGallery = () => {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const indicator = document.querySelector(".scroll-indicator");
      if (indicator) indicator.style.width = scrolled + "%";
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${
              entry.target.dataset.delay * 0.2
            }s`;
            entry.target.style.animationPlayState = "running";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".gallery-item")
      .forEach((item) => observer.observe(item));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const galleryItems = [
    {
      title: "Alpine Majesty",
      desc: "Towering peaks pierce through misty clouds.",
      img: design1,
    },
    {
      title: "Urban Symmetry",
      desc: "Glass and steel create mesmerizing patterns.",
      img: design2,
    },
    {
      title: "Nature's Power",
      desc: "A majestic waterfall cascades through lush green forest.",
      img: design1,
    },
    {
      title: "Golden Hour",
      desc: "Warm sunlight bathes the landscape in ethereal golden tones.",
      img: design3,
    },
    {
      title: "City Lights",
      desc: "The urban landscape comes alive with countless twinkling lights.",
      img: design4,
    },
  ];

  return (
    <div className="bg-[#fffaf1] font-[Inter] text-[#5C5E5F] mb-4">
      <div className="scroll-indicator fixed top-0 left-0 h-[3px] bg-[#00A89D] z-50 transition-all"></div>

      <div className="max-w-[1300px] mx-auto py-6 px-6">
        <h1 className="text-5xl font-extrabold text-black mb-20 text-center translate-y-8 animate-fadeUp">
          Dive into Our Community <br />
          <span className="text-gray-500 text-2xl">
            Learn Online, Connect Offline
          </span>
        </h1>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            {[galleryItems[0], galleryItems[2]].map((item, index) => (
              <GalleryCard key={index} item={item} index={index + 1} />
            ))}
          </div>

          <div className="h-auto md:h-[580px]">
            <GalleryCard item={galleryItems[1]} index={3} tall />
          </div>

          <div className="flex flex-col gap-6">
            {[galleryItems[3], galleryItems[4]].map((item, index) => (
              <GalleryCard key={index} item={item} index={index + 4} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

const GalleryCard = ({ item, index, tall }) => (
  <div
    data-delay={index}
    className={`gallery-item group relative rounded-xl overflow-hidden opacity-0 translate-y-8 animate-fadeUp ${
      tall ? "h-full md:h-full" : "h-[280px]"
    }`}
  >
    <img
      src={item.img}
      alt={item.title}
      className="w-full h-full object-cover"
    />

    <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#7263f3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

    <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-t from-[#2d817e]  to-[#002726]/70 p-4 text-white transition-transform duration-500">
      <h2 className="text-lg font-semibold">{item.title}</h2>
      <p className="text-sm opacity-90">{item.desc}</p>
      <span className="text-xs mt-2 block">Photo by Unsplash</span>
    </div>
  </div>
);

export default ModernMasonryGallery;
