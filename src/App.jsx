import { Crosshair } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// Main App
function App() {
  return (
    <div className="bg-gray-950 w-full min-h-screen flex items-center flex-col p-4 gap-5">
      {/* Navbar */}
      <nav className="bg-black/75 w-full font-bold rounded-md flex items-center justify-between border-2 border-gray-700 px-5 py-2">
        <div className="text-pink-600 flex gap-2 items-center">
          <Crosshair className="animate-[spin_4s_linear_infinite]" />
          /- CroXX
        </div>

        <div className="flex gap-5">
          <a
            href="#"
            className="text-white p-2 hover:text-pink-500 transition-colors">
            HOME
          </a>

          <a
            href="#"
            className="text-white p-2 hover:text-pink-500 transition-colors">
            ABOUT US
          </a>

          <a
            href="#"
            className="text-white p-2 hover:text-pink-500 transition-colors">
            SUPPORT !
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="bg-black/75 w-full min-h-[200vh] rounded-md border-2 border-gray-700 p-6">
        <Cards />
      </main>

      {/* Footer */}
      <footer className="bg-black w-full h-60 font-bold rounded-md flex items-center justify-center border-2 border-gray-700 text-white">
        Footer
      </footer>
    </div>
  );
}

export default App;

// Cards Component
function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10",
        );

        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getUserData();
  }, []);

  // Loading State
  if (loading) {
    return <p className="text-white text-center">Loading dogs...</p>;
  }

  // Error State
  if (error) {
    return <p className="text-red-500 text-center">Error: {error}</p>;
  }

  // Display Cards
  return (
    <div className=" w-full grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
      {data.map((item) => (
        <DogCard key={item.id} item={item} />
      ))}
    </div>
  );
}

// Individual Dog Card Component
function DogCard({ item }) {
  return (
    <div className="bg-gray-900 w-full min-h-50 flex flex-col items-center justify-between p-3 rounded-lg border-2 border-gray-700 text-[14px] transition-transform hover:scale-105">
      <img
        src={item.url}
        alt={`Dog ${item.id}`}
        className="w-full h-36 object-cover rounded-md"
      />

      <h3 className="text-white mt-2">{item.id}</h3>
    </div>
  );
}
