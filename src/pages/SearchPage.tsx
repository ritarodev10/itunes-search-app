import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/results?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#712bda] to-[#a45deb] py-[26px]">
      <div className="flex flex-col h-full w-full max-w-md m-auto">
        <div className="flex justify-center items-center h-full">
          <div>
            <img
              src={import.meta.env.VITE_APP_PUBLIC_URL + "/assets/logo.svg"}
              alt="logo"
            />
          </div>
        </div>
        <form
          className="flex flex-col gap-[15px] justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            className="flex text-center h-10 sm:h-12 w-[280px] sm:w-full rounded-[20px] sm:rounded-full text-sm placeholder-gray-400"
            placeholder="Artist/Album/Title"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button type="submit" variant="searchOne" disabled={!searchTerm}>
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Search;
