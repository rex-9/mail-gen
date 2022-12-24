import Sidebar from "../elements/Sidebar";

const Dashboard = () => {
  return (
    <section>
      <div className="flex h-[90%]">
        <Sidebar />
        {/* <!-- Scroll wrapper --> */}
        <div className="flex-1 flex overflow-hidden bg-black">
          {/* <!-- Scrollable container --> */}
          {/* <div className="flex-1 overflow-y-scroll"> */}
            {/* <!-- Your content --> */}
            <h1>Dashboard</h1>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;