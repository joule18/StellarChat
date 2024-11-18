// import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10">
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  );
};
export default Home;
