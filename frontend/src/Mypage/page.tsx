import React from "react";
import CardsContainers from "../CommonComponents/CardsComponents/CardsContainers";
import UserInfoContainer from "./components/UserInfoContainer";
import { useUser } from "./customHooks/useUser";
import { MyPageHeader } from "./styles/styledComponents";

const MyPage: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <MyPageHeader>MyPage</MyPageHeader>
      {user.isSuccess && user.data ? (
        <UserInfoContainer
          intraId={user.data.intraId}
          wallet={user.data.wallet}
        />
      ) : null}
      <CardsContainers
        selectedTag={["-1", "-2"]}
        setSelectedTag={() => {}}
        isMain={false}
      />
    </div>
  );
};

export default MyPage;
