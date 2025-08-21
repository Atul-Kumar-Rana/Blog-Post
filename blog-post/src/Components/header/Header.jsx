import Logout from "./Logout";
import { Waypoints } from "lucide-react";
export default function Header() {
  return (
    <header className="bg-gray-900 text-white w-full py-5 shadow-indigo-900">
      <div className="w-full flex items-center justify-between px-4">
        
  <h1 className="text-4xl flex font-bold text-blue-200">
    <Waypoints size={55} color="#5963b1" strokeWidth={2.75} /> BlogPost</h1>
  <Logout />
</div>

    </header>
  );
}
