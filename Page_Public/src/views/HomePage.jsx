import { Link, animateScroll as scroll } from "react-scroll";
import { Cards } from "../components/CardsPublic";
import Pagination from "../components/PaginationPublic";
import JobImage from "../assets/img2.png";

const Home = () => {
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  return (
    <>
      <section id="home" className="pt-9 h-screen">
        <div className="container h-full flex items-center">
          {/* left */}
          <div className="w-full px-200 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
              Selamat datang!
              <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl pt-7">
                Raih Pekerjaan Untuk Karir Yang Bermakna Bagimu
              </span>
            </h1>
            <h2 className="font-medium text-slate-500 text-lg md-5 lg:text-2xl">
              #KarirImpian & <span className="text-dark">#TemukanKarirmu</span>
            </h2>
            <p className="font-medium text-slate-400">
              "Temukan dengan mudah karir terbaru dan impianmu di Job Seeker!"
            </p>
            <br />

            <a
              onClick={scrollToBottom}
              className="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out cursor-pointer"
            >
              Apply Now
            </a>
          </div>
          {/* right */}
          <div className="w-full lg:w-1/2 hidden lg:flex items-center">
            <img
              src={JobImage}
              alt="test"
              className="max-w-full mx-auto h-auto lg:h-full"
            />
          </div>
        </div>
      </section>
      {/* section end */}
      <section id="list" className="pt-15 pb-5">
        <div className="container">
          <div className="flex justify-start">
            <span className="block font-bold text-dark text-4xl mt-1 lg:text-4xl">
              List Job
            </span>
          </div>
        </div>
      </section>

      <Cards />
      <Pagination />
    </>
  );
};

export default Home;
