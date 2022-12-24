import { icons } from "../../assets/assets";
import Sidebar from "../elements/Sidebar";

const Dashboard = () => {
  return (
    <section className="h-full">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1">
          <nav className="flex items-center justify-around my-4">
            <button className="btn">+ Create New</button>
            <ul className="flex items-center justify-between w-96">
              <li><img src={icons.search} alt="Search Icon" /></li>
              <li><img src={icons.notification} alt="Notification Icon" /></li>
              <li><button className="btn bg-bg text-primary hover:bg-black/20">Login</button></li>
              <li><button className="btn">Register</button></li>
            </ul>
          </nav>
          <h1>Dashboard</h1>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;