import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TabSection from "../components/TabSection";
import UserCard from "../components/UserCard";
import { UserNav } from "../components/UserNav";

const UserDashBoard = () => {
  const queryClient = useQueryClient();
  return (
    <div>
      <UserNav activeLink={0} />
      <div className="udash-hero">
        <UserCard />
        <TabSection/>
      </div>
    </div>
  );
};

export default UserDashBoard;
