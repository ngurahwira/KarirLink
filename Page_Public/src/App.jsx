import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Navbartest } from "./components/navbar";
import { Pagination } from "./components/Pagination";
import { Cards } from "./components/Cards";
import { Search } from "./components/Search";
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*  Navbar   */}
      <Navbartest />
      {/*  End Navbar  */}

      {/* Search */}
      <Search />
      {/* End Search */}

      {/*  section start  */}
      <section id="home" className="pt-5">
        <div className="container">
          <div className="flex flex-wrap">
            {/*  left  */}
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">
                welcome 😁
                <span className="block font-bold text-dark text-4xl">
                  We are
                </span>
                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                  Creative80
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg md-5 lg:text-2xl">
                tag and <span className="text-dark">hastag</span>
              </h2>
              <p className="font-medium text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <br />

              <a
                href="#"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-md hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out"
              >
                Apply Now
              </a>
            </div>
            {/*  right  */}
            <div className="w-full self-center px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src="/src/assets/img2.png"
                  alt="test"
                  className="max-w-full mx-auto"
                />
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  section end  */}
      {/*  section start 2 */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10">
              <h4 className="font-bold uppercase text-primary text-lg md-3">
                tentang
              </h4>
              <h2 className="font-bold text-dark text-3xl mb-5 max-w-xl">
                yuk belajar
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                quaerat, incidunt dolor excepturi, veritatis tenetur maxime
                esse, rem nihil at ipsam molestiae sapiente corrupti possimus ea
                doloremque numquam illo maiores.
              </p>
              <div className="w-full px-4"></div>
              <h3>mari berteman</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate minima similique dignissimos deleniti dolore
                perferendis cumque at voluptatem sequi, assumenda pariatur,
                repellendus libero quos autem nesciunt, fugit quasi quis.
                Temporibus.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  section end  */}

      {/* LAYOUT CARD */}
      <Cards />
      {/* END CARD */}

      {/* PAGINATION */}
      <Pagination />
      {/* End Pagination */}
    </>
  );
}

export default App;
