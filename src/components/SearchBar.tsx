"use client";
import React, { useState } from "react";
import { Search, Mic, Camera, X } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("Anil Bhandari");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full max-w-2xl bg-white border border-gray-100 rounded-full hover:shadow-md drop-shadow-md focus-within:shadow-md px-5 py-[0.5rem]"
    >
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow w-[33rem] text-base text-gray-700 focus:outline-none"
        placeholder="Search Google or type a URL"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          className="p-1 mr-2"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>
      )}
      <div className="h-7 w-px bg-gray-200 mr-2"></div>
      {/* mic  */}
      <button type="button" className="p-1 mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M12 2a2.5 2.5 0 0 0-2.5 2.5v7a2.5 2.5 0 0 0 5 0v-7A2.5 2.5 0 0 0 12 2Z"
            fill="#4285F4"
            stroke="#4285F4"
          />
          <path d="M19 11v1a7 7 0 0 1-14 0v-1" stroke="#EA4335" />
          <path d="M12 19v3" stroke="#34A853" />
          <circle cx="12" cy="19" r="0.5" fill="#FBBC05" />
        </svg>
      </button>
      {/* camera */}
      <button type="button" className="p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
            stroke="#4285F4"
            fill="#E8F0FE"
          />
          <circle cx="12" cy="13" r="3" stroke="#EA4335" fill="#FCECEA" />
          <circle cx="12" cy="13" r="1.5" fill="#34A853" />
          <path d="M9 6h6" stroke="#FBBC05" />
        </svg>
      </button>
      <Search className="h-6 w-6 text-blue-500 mr-3 ml-3" />
    </form>
  );
};

export default SearchBar;
