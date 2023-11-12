import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";
import { useNavigate } from "react-router-dom";

const accessToken = localStorage.getItem("token");

const Job_API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();
  const hendleOnclickEdit = (id) => {
    navigate(`/job/${id}`);
  };

  const hendleOnclickDelete = async (id) => {
    try {
      await Job_API.delete(`job/${id}`);
      const { data } = await Job_API.get("job");
      setJobs(data.dataJob);

      console.log(`Job with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  useEffect(() => {
    async function fetchJobs() {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get("job");
        console.log(data.dataJob);
        setJobs(data.dataJob);
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
      {/* {JSON.stringify(jobs)} */}
      <div class="flex h-screen">
        <div className="m-auto mt-20">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>imgUrl</th>
                <th>jobType</th>
                <th>companyId</th>
                <th>authorId</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((el, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.description}</td>
                  <td>{el.imgUrl}</td>
                  <td>{el.jobType}</td>
                  <td>{el.companyId}</td>
                  <td>{el.authorId}</td>
                  <td>
                    <button onClick={() => hendleOnclickEdit(el.id)}>
                      Edit
                    </button>{" "}
                    |
                    <button onClick={() => hendleOnclickDelete(el.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
