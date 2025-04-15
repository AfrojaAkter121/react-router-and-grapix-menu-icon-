import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const UserDetails = () => {
  const params = useLoaderData();
  console.log(params);
  const navigate = useNavigate()

  const { website, name, phone, address, email, company } = params;


  return (
    <div className="min-h-screen pt-20 flex flex-col justify-center items-center">
      <h1 className="text-2xl">User Details</h1>
      <div className="border border-lime-800 rounded-2xl p-4">
        <h1 className="text-2xl">
          <strong>Name : </strong>
          {name}
        </h1>
        <h1 className="text-xl">
          <strong>Country :</strong> {address.city}
        </h1>
        <h1 className="text-xl">
          <strong>Company Name :</strong> {company.name}
        </h1>
        <h2>
          <strong>Phone :</strong> {phone}
        </h2>
        <h1>
          <strong>Website : </strong>
          {website}
        </h1>
        <p>
          <strong>Email : </strong> {email}{" "}
        </p>
        <button className="border border-lime-700 rounded-2xl p-2" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
