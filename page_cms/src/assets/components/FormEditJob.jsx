import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate, useParams } from "react-router-dom";

const EditJobForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [error, setError] = useState(null);

  const accessToken = localStorage.getItem("token");
  const Job_API = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const response = await Job_API.get(`/job/${id}`);
        const jobData = response.data.dataJob;
        setTitle(jobData.title);
        setJobType(jobData.jobType);
        setImgUrl(jobData.imgUrl);
        setDescription(jobData.description);
        setCompanyId(jobData.companyId);
        setAuthorId(jobData.authorId);

        // console.log(response.data.dataJob, 121211111);
      } catch (error) {
        console.error(error);
        setError("Error fetching job data");
      }
    };

    fetchJobData();
  }, []);

  const hendleEditJob = async (event) => {
    event.preventDefault();
    try {
      const updatedJobData = await Job_API.put(`/job/${id}`, {
        title,
        jobType,
        imgUrl,
        description,
        companyId,
        authorId,
      });
      console.log(updatedJobData);
    } catch (error) {
      console.error(error);
      setError("Error editing job");
    }
    navigate("/");
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Edit Job</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* form */}
            <form
              className="card-body"
              noValidate=""
              action=""
              onSubmit={hendleEditJob}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="name"
                  placeholder="Title"
                  className="input input-bordered"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="name"
                  placeholder="Description"
                  className="input input-bordered"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="name"
                  placeholder="ImageURL"
                  className="input input-bordered"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">JobType</span>
                </label>
                <input
                  type="name"
                  placeholder="JobType"
                  className="input input-bordered"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">AuthorId</span>
                </label>
                <input
                  type="name"
                  placeholder="AuthorId"
                  className="input input-bordered"
                  value={authorId}
                  onChange={(e) => setAuthorId(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Company</span>
                </label>
                <input
                  type="name"
                  placeholder="Company"
                  className="input input-bordered"
                  value={companyId}
                  onChange={(e) => setCompanyId(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <ButtonSubmit label="Edit Job" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditJobForm;
