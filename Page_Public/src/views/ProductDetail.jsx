import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Job_Portal_URL = import.meta.env.VITE_BACKEND_HOST;
const Job_API = axios.create({
  baseURL: Job_Portal_URL,
});

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

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
    if (id) {
      fetchJobs();
    }
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error fetching</p>;
  }

  return (
    <>
      {/* {JSON.stringify(jobs)} */}
      <div className="container mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="card card-side bg-base-100 shadow-xl p-7">
            <div className="card-body">
              <div className="aspect-w-2 aspect-h-1 overflow-hidden">
                <img
                  src={jobs.dataJob.imgUrl}
                  alt={jobs.dataJob.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="card-title text-2xl font-bold mt-4">
                {jobs.dataJob.title}
              </h1>
              <h6 className="text-1xl font-bold mt-4">
                {jobs.dataJob.jobType}
              </h6>
              <p className="text-gray-700">{jobs.dataJob.description}</p>
              <div className=" pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{jobs.dataJob.Company.name}
                </span>
              </div>

              <div className="card-actions flex justify-end mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/login")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
