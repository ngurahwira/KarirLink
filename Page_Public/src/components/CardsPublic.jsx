import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Job_Portal_URL = "http://localhost:3000/";
const Job_API = axios.create({
  baseURL: Job_Portal_URL,
});

export const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();
  const hendleOnclick = (id) => {
    navigate(`/pub/detail/${id}`);
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
                  <h5 className="card-title">{job.description}</h5>
                  <div className="card-actions justify-end">
                    <a href="#">
                      {" "}
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end"
                        onClick={() => hendleOnclick(job.id)}
                      >
                        Readmore
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
