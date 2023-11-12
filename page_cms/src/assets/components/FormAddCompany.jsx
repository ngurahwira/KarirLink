import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate } from "react-router-dom";

const FormAddCompany = () => {
  const [name, setName] = useState("");
  const [companyLogo, setImageUrl] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const accessToken = localStorage.getItem("token");
  const Job_API = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  const navigate = useNavigate();

  const handleAddCompany = async (event) => {
    event.preventDefault();
    try {
      const companyData = await Job_API.post("/company", {
        name,
        companyLogo,
        location,
        email,
        description,
      });
    } catch (error) {
      console.error(error);
    }
    return navigate("/company");
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Company</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* form */}
            <form
              className="card-body"
              novalidate=""
              action=""
              onSubmit={handleAddCompany}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Logo</span>
                </label>
                <input
                  type="name"
                  placeholder="Logo"
                  className="input input-bordered"
                  value={companyLogo}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="name"
                  placeholder="Location"
                  className="input input-bordered"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

              <div className="form-control mt-6">
                <ButtonSubmit label="Add Company" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddCompany;
