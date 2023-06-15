import React, { useEffect } from "react";
import CardsContainers from "../CommonComponents/CardsComponents/CardsContainers";
import UserInfoContainer from "./components/UserInfoContainer";
import { useUser } from "./customHooks/useUser";
import { MyPageHeader } from "./styles/styledComponents";
import { useResponsive } from "../Main/customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";

const MyPage: React.FC = () => {
  const user = useUser();
  const responsiveVar = useResponsive();

  useEffect(() => {
    if (responsiveVar.isMobile) setRootFontSize(15);
    if (responsiveVar.isDesktop) setRootFontSize(14);
  }, [responsiveVar]);

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
