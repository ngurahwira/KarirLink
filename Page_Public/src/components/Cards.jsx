import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Job_Portal_URL = "http://localhost:3000/";
const Job_API = axios.create({
  baseURL: Job_Portal_URL,
});

export const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  // console.log(jobs, 20);
  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get("pub/job");
        console.log(data);
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
        <div class="grid grid-cols-2 gap-3 ">
          {/* {JSON.stringify(jobs)} */}
          {jobs.map((job) => (
            <div>
              <div
                className="card card-side bg-base-100 shadow-xl"
                key={job.id}
              >
                <figure>
                  <img src={job.imgUrl} alt="Job" />
                </figure>

                <div className="card-body">
                  <h1 className="card-title">{job.title}</h1>
                  <h5 className="card-title">{job.description}</h5>
                  <div className="card-actions justify-end">
                    <a href="#">
                      {" "}
                      <button className="btn btn-primary justify-end">
                        ReadMore
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
