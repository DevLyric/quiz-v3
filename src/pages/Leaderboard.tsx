import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

interface Doc {
  id: string;
  name: string;
  score: number;
}

export default function Leaderboard() {
  const [users, setUsers] = useState<Doc[]>([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      try {
        // Retrieve documents from the 'users' collection
        const data = await getDocs(usersCollectionRef);

        // Update state with mapped data including document id
        setUsers(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Doc))
        );
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Call the getUsers function
    getUsers();
  }, []);

  return (
    <div className="mt-32">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl text-center font-semibold">LeaderBoard</h1>
          <p className="text-center text-gray-400 font-medium">
            Dive into the leaderboard and discover how your scores stack up
            against the competition!
          </p>
        </div>
        {users.map((user) => (
          <div
            className="flex items-center justify-between rounded shadow-md cursor-pointer p-3 font-medium bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 text-white hover:scale-105 transition-all"
            key={user.id}
          >
            <p>{user.name}</p>
            <p>Points: {user.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
