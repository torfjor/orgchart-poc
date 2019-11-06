import { useEffect, useState } from "react";
import { User } from "../types";

const NUM_USERS = 25;
const API_URI = `https://randomuser.me/api?results=${NUM_USERS}`;

export const useRandomUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(API_URI);
        const { results } = await response.json();
        if (results && Array.isArray(results)) {
          const users: User[] = results.map(u => ({
            id: u.login.uuid,
            firstName: u.name.first,
            lastName: u.name.last,
            email: u.email,
            picture: u.picture.medium
          }));
          setUsers(users);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading };
};
