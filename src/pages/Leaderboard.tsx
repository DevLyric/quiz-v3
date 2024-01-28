import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

interface Doc {
  id: string;
  name: string;
  score: number;
}

export default function LeaderBoard() {
  const [users, setUsers] = useState<Doc[]>([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Doc)));
    };

    getUsers();
  }, []);

  return (
    <div className="mt-32">
      <div className="container mx-auto px-6">
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
