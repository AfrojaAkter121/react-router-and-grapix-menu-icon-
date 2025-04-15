import React, { useState } from "react";
import { Link } from "react-router";
import PostDetails from "./PostDetails";

const Post = ({ service }) => {
  const { id, title, body } = service;
  const [showinfo, setShow] = useState(false);

  return (
    <div className="border border-lime-800 rounded-2xl p-2 text-center flex flex-col items-start justify-between">
      <h1 className="text-left">{title}</h1>
        <div className="flex justify-between">
        <Link to={`/services/${id}`}>
        <button className="btn">show</button>
      </Link>
      <button onClick={() => setShow(!showinfo)}>
        {showinfo ?
        (
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
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )  
        :
        (
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
                  d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                />
              </svg>
            ) }
      </button>
        </div>
      {
        showinfo && 
        <div className="border border-lime-700 rounded-xl">
            <p>{body}</p>
        </div>
      }
    </div>
  );
};

export default Post;
