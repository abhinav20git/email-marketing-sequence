import { useAppState } from "../../utils/appState";
import { Link } from "react-router-dom";
import Sequence from "./Sequence";
import Cstbutton from "../reusables/CstButton";

export default function Home() {
  const { user, setUser } = useAppState();

  console.log("Hello from Home", user);

  return (
    <div className="w-full h-[100vh]">
      {!user ? (
        <div>
          <div className="flex flex-col items-center justify-center text-center h-screen bg-gray-100">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-black ">Future Blink-Assignment</h1>
            <div className="px-4 md:px-[250px]">
              <p className=" text-xs lg:text-lg mb-6 font-medium font-inter">
              An application that allows users to design and implement an email marketing sequence using visual flowchart interface. This project will utilize the MERN stack (MongoDB, Express.js, React, and Node.js) and the React Flow library for the frontend flowchart interface while using Agenda & Nodemailer for the backend.

              </p>
            </div>
            <div className="flex space-x-4">
              <Link to="/login">
                <Cstbutton
                  text="Login"
                  className="w-20 lg:w-32 bg-blue-500 hover:bg-blue-600 border-[2px] border-blue-500 text-white font-bold p-2 md:p-4 rounded-md"
                />
              </Link>
              <Link to="/register">
                <Cstbutton
                  text="Sign Up"
                  className="w-24 lg:w-32 border-black rounded-md border-[2px] p-2 md:p-4 font-bold hover:bg-gray-300"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Sequence />
      )}
    </div>
  );
}
