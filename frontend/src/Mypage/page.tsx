import React from "react";
import FixedTop from "../Etc/FixedTop";
import CardsContainers from "../Main/components/Card/CardsContainers";
import UserInfoContainer from "./components/UserInfoContainer";
import { useUser } from "./customHooks/useUser";
import { MyPageHeader } from "./styles/styledComponents";

const MyPage: React.FC = () => {
  const user = useUser();

  return (
    <div id="desktop">
      <FixedTop />
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
    </div>
  );
};

export default MyPage;
