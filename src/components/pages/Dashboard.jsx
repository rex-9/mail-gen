import { icons } from "../../assets/assets";
import Operations from "../elements/Operations";
import Sidebar from "../elements/Sidebar";

const Dashboard = () => {
  return (
    <section className="h-full">
      <div className="flex h-full">
        <Sidebar />
        <div className="flex overflow-hidden">
          {/* <!-- Scrollable container --> */}
          <div className="overflow-y-scroll p-4 pb-12">
            {/* <!-- Your content --> */}
            <nav className="sticky bg-white/60 top-0 flex items-center justify-around mb-8">
              <button type="button" className="btn">+ Create New</button>
              <ul className="flex items-center justify-between w-96">
                <li><button type="button"><img src={icons.search} alt="Search Icon" /></button></li>
                <li><button type="button"><img src={icons.notification} alt="Notification Icon" /></button></li>
                <li><button type="button" className="btn bg-bg text-primary hover:bg-black/10">Login</button></li>
                <li><button type="button" className="btn">Register</button></li>
              </ul>
            </nav>
            <div className="flex flex-col justify-around h-[90%] my-4">
              <div>
                <h1 className="text-2xl font-bold">Subject:</h1>
                <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4 flex items-center justify-between">
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</span>
                  <button type="button"><img src={icons.edit} alt="Edit Icon" /></button>
                </p>
                <Operations />
                <h1 className="text-2xl font-bold">Body:</h1>
                <p className="text-lg py-4 px-8 bg-bg rounded-lg m-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit cum atque ratione optio sequi itaque, earum, nam delectus ea esse repudiandae facere! Reiciendis atque quibusdam nobis dolor quos, officiis inventore?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi error consectetur, eius, iure tempore vel eum nemo exercitationem tenetur fugit inventore natus repellendus nesciunt dolore. Vel soluta iusto incidunt voluptatum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga velit ea eaque ab rerum alias rem quidem ipsam iure officiis nihil dolorem autem inventore laboriosam perferendis, sed hic ut nobis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque non. Eos officia adipisci placeat itaque quae culpa excepturi quidem doloribus odio assumenda, unde suscipit earum eligendi, repellendus hic esse!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rem tempora facere. Blanditiis ad ipsum suscipit rem quia, corporis enim earum perspiciatis iste veniam repellat repudiandae explicabo dolores, ut esse?
                  </p>
                  <div className="text-end">
                    <button type="button"><img src={icons.edit} alt="Edit Icon" /></button>
                  </div>
                </p>
                <Operations />
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
      </div>
    </section>
  );
}

export default Dashboard;