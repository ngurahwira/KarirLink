import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate } from "react-router-dom";

const FormJob = () => {
  const [title, setTitle] = useState("");
  const [jobType, setJobtype] = useState("");
  const [imgUrl, setImgurl] = useState("");
  const [description, setDecription] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [authorId, setAthorId] = useState("");
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

  const handlerAddJob = async (event) => {
    event.preventDefault();
    try {
      const jobData = await Job_API.post("/job", {
        title,
        jobType,
        imgUrl,
        description,
        companyId,
        authorId,
      });
      // console.log(userData);
    } catch (error) {
      console.error(error);
      setError(error);
    }
    return navigate("/");
  };

  if (error) {
    return <p>Error {error}</p>;
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Form Job</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* form */}
            <form
              className="card-body"
              novalidate=""
              action=""
              onSubmit={handlerAddJob}
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
                  onChange={(e) => setDecription(e.target.value)}
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
                  onChange={(e) => setImgurl(e.target.value)}
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
                  onChange={(e) => setJobtype(e.target.value)}
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
                  onChange={(e) => setAthorId(e.target.value)}
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
                <ButtonSubmit label="Add Job" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormJob;
