import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;