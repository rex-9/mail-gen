import { icons, images } from "../../assets/assets"

const Sidebar = () => {
  return (
    <div className="bg-bg flex flex-col items-center justify-around">
      <img src={images.logo} alt="Prompt Me Logo" width={150} height={55} />
      <ul className="w-64 pl-12">
        <li>
          <button className="sidebar-item">
            <img src={icons.home} alt="Dashboard Icon" />
            <span>Dashboard</span>
          </button>
        </li>
        <li>
          <button className="sidebar-item">
            <img src={icons.templates} alt="Templates Icon" />
            <span>Templates</span>
          </button>
        </li>
        <li>
          <button className="sidebar-item">
            <img src={icons.recipients} alt="Recipients Icon" />
            <span>Recipients</span>
          </button>
        </li>
        <li>
          <button className="sidebar-item">
            <img src={icons.analytics} alt="Analytics Icon" />
            <span>Analytics</span>
          </button>
        </li>
        <li>
          <button className="sidebar-item">
            <img src={icons.setting} alt="Seeting Icon" />
            <span>Settings</span>
          </button>
        </li>
        <li>
          <button className="sidebar-item">
            <img src={icons.resources} alt="Resource Icon" />
            <span>Resources</span>
          </button>
        </li>
      </ul>
      <div className="flex justify-center gap-2">
        <button className="sidebar-item gap-2 w-fit">
          <img src={icons.help} alt="Help Icon" />
          <span>Help</span>
        </button>
        <button className="sidebar-item gap-2 w-fit">
          <img src={icons.logout} alt="Log Out Icon" />
          <span>Signout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar