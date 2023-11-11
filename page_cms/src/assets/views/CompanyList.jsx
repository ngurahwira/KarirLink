import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../configs/config";

const Job_API = axios.create({
  baseURL: BASE_URL,
});

const Company = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCompany() {
      try {
        setIsLoading(true);
        const { data } = await Job_API.get("company");
        // console.log(data);
        setCompanies(data.dataCompany);
      } catch (error) {
        // console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

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
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          Add Company
        </button>
      </div>
      <div class="flex h-screen">
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
                    <a href="">Edit</a> || <a href="">Delete</a>
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
