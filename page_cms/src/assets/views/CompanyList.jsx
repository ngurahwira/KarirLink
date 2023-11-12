import { useState, useEffect } from "react";
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

const Company = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  const handleOnClickEdit = (id) => {
    navigate(`/company/${id}`);
  };

  const handleOnClickDelete = async (id) => {
    try {
      await Job_API.delete(`company/${id}`);
      const { data } = await Job_API.get("company");
      setCompanies(data.dataCompany);
      console.log(`Job with ID ${id} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting company:", error);
    }
  };

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get("company");
        console.log(data.dataCompany);
        setCompanies(data.dataCompany);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompany();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching</p>;
  }

  return (
    <>
      <div className="flex justify-center items-center mt-11">
        <a href="/formCompany">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            Add Company
          </button>
        </a>
      </div>
      <div className="flex h-screen">
        <div className="m-auto mt-20">
          <table className="container table w-full ">
            <thead>
              <tr className="bg-base-200">
                <th></th>
                <th>Name</th>
                <th>Company Logo</th>
                <th>Location</th>
                <th>Email</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{company.name}</td>
                  <td>{company.companyLogo}</td>
                  <td>{company.location}</td>
                  <td>{company.email}</td>
                  <td>{company.description}</td>
                  <td>
                    <button onClick={() => handleOnClickEdit(company.id)}>
                      Edit
                    </button>{" "}
                    |
                    <button onClick={() => handleOnClickDelete(company.id)}>
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

export default Company;
