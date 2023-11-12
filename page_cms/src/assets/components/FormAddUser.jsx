import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";
import ButtonSubmit from "./ButtonSubmit";
import { useNavigate } from "react-router-dom";

const FormStaff = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Staff");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
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

  const handlerAddUser = async (event) => {
    event.preventDefault();
    try {
      const userData = await Job_API.post("/register", {
        username,
        email,
        role,
        password,
        phoneNumber,
        address,
      });

      // console.log(userData);
    } catch (error) {
      console.error(error);
    }
    return navigate("/");
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Form Staff</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* form */}
            <form
              className="card-body"
              novalidate=""
              action=""
              onSubmit={handlerAddUser}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="name"
                  placeholder="Username"
                  className="input input-bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Role</span>
                </label>
                <input
                  type="name"
                  placeholder="Role"
                  className="input input-bordered"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="name"
                  placeholder="Phone Number"
                  className="input input-bordered"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="name"
                  placeholder="Address"
                  className="input input-bordered"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover"></a>
                </label>
              </div>
              <div className="form-control mt-6">
                <ButtonSubmit label="Add" />
                {/* <button className="btn btn-primary">Add</button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormStaff;
