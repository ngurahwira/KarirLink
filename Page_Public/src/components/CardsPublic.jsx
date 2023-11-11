import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Job_Portal_URL = import.meta.env.VITE_BACKEND_HOST;
const Job_API = axios.create({
  baseURL: Job_Portal_URL,
});

export const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();
  const hendleOnclick = (id) => {
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get("pub/job");
        // console.log(data);
        setJobs(data.result.data);
      } catch (error) {
        // console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching</p>;
  }

  return (
    <>
      <div className="container ">
        <div class="grid grid-cols-3 gap-2 ">
          {/* {JSON.stringify(jobs)} */}
          {jobs.map((job) => (
            <div>
              <div
                className="card card-side bg-base-100 shadow-xl"
                key={job.id}
              >
                <div className="card-body">
                  <div className="flex items-center w-full aspect-[4/2] overflow-hidden">
                    <img
                      className="w-full object-cover"
                      src={job.imgUrl}
                      alt="Job"
                    />
                  </div>

                  <h1 className="card-title">{job.title}</h1>
                  <p>{job.description}</p>

                  <div className="card-actions justify-end">
                    <a href="">
                      <button
                        className="text-base font-semibold text-white bg-blue-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out cursor-pointer justify-end"
                        onClick={() => hendleOnclick(job.id)}
                      >
                        More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
