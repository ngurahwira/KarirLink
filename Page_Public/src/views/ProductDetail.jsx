import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Job_Portal_URL = "http://localhost:3000/";
const Job_API = axios.create({
  baseURL: Job_Portal_URL,
});

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState({});
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get(`/pub/jobdetail/${id}`);
        // console.log(data);
        setJobs(data);
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
        <div className="grid grid-cols-2 gap-3 ">
          {/* {JSON.stringify(jobs)} */}

          <div>
            <div
              className="card card-side bg-base-100 shadow-xl pt-7"
              key={jobs.dataJob.id}
            >
              <img src={jobs.dataJob.imgUrl} alt="img" />
              <div className="card-body">
                <h1 className="card-title">{jobs.dataJob.title}</h1>
                <h5 className="card-title">{jobs.dataJob.description}</h5>
                <button>Back</button>
                <div className="card-actions justify-end"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
