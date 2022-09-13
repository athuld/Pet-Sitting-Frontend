import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../api/sitterApi";
import TabSection from "../components/TabSection";
import UserCard from "../components/UserCard";
import { UserNav } from "../components/UserNav";

const UserDashBoard = () => {
  const {data:userData,isLoading} = useQuery(['user'],getUserDetails)

  return (
    <div>
      <UserNav activeLink={0} />
      <div className="udash-hero">
        <UserCard userData={userData} isLoading={isLoading} />
        <TabSection isUserLoading={isLoading} userData={userData}/>
      </div>
    </div>
  );
};

export default UserDashBoard;
