import { icons } from "../../assets/assets";
import Sidebar from "../elements/Sidebar";

const Dashboard = () => {
  return (
    <section className="h-full">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 mt-4 mx-8">
          <nav className="flex items-center justify-around mb-8">
            <button className="btn">+ Create New</button>
            <ul className="flex items-center justify-between w-96">
              <li><img src={icons.search} alt="Search Icon" /></li>
              <li><img src={icons.notification} alt="Notification Icon" /></li>
              <li><button className="btn bg-bg text-primary hover:bg-black/10">Login</button></li>
              <li><button className="btn">Register</button></li>
            </ul>
          </nav>
          <div className="flex flex-col justify-around h-[90%]">
            <div>
              <h1 className="text-2xl font-bold">Subject:</h1>
              <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>

              <h1 className="text-2xl font-bold">Body:</h1>
              <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum atque ratione optio sequi itaque, earum, nam delectus ea esse repudiandae facere! Reiciendis atque quibusdam nobis dolor quos, officiis inventore?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consectetur, eius, iure tempore vel eum nemo exercitationem tenetur fugit inventore natus repellendus nesciunt dolore. Vel soluta iusto incidunt voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit ea eaque ab rerum alias rem quidem ipsam iure officiis nihil dolorem autem inventore laboriosam perferendis, sed hic ut nobis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque non. Eos officia adipisci placeat itaque quae culpa excepturi quidem doloribus odio assumenda, unde suscipit earum eligendi, repellendus hic esse!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem tempora facere. Blanditiis ad ipsum suscipit rem quia, corporis enim earum perspiciatis iste veniam repellat repudiandae explicabo dolores, ut esse?
              </p>
            </div>
            <div className="flex justify-between">
              <button type="button" className="btn flex bg-bg text-primary hover:bg-black/10">
                <img src={icons.save} alt="Save and Add" />
                <span>Save to your templates</span>
              </button>
              <button type="button" className="btn flex">
                <img src={icons.copy} alt="Copy Email" />
                <span>copy email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;