"use client";

import { useState, useEffect, useRef } from "react";

export default function SearchPage() {
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const timerRef = useRef(null);

  async function FetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setSearchInput(e.target.value);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-8">
      <div>
        <input
          placeholder="Search"
          value={searchInput}
          onChange={handleSearch}
        />
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        users
          .filter(
            (user) =>
              user.firstName
                .toLowerCase()
                .includes(searchInput.toLowerCase()) ||
              user.lastName.toLowerCase().includes(searchInput.toLowerCase()),
          )
          .map((user) => (
            <div key={user.id}>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>{user.email}</p>
            </div>
          ))
      )}
    </div>
  );
}
