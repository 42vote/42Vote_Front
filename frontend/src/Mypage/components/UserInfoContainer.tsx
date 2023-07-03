import { useResponsive } from "../../Main/customHooks/useResponsive";
import ScramblerComponent from "../effects/Scrambler";
import {
  MyPageUserInfoContainer,
  UserCoalition,
  UserInfoList,
  UserName,
  UserWallet,
} from "../styles/styledComponents";

interface userInfoProps {
  intraId: string;
  wallet: number;
  coalition: string;
}

const UserInfoContainer = (userInfoProps: userInfoProps) => {
  const responsiveVar = useResponsive();
  return (
    <MyPageUserInfoContainer responsiveVar={responsiveVar}>
      <UserInfoList>
        <UserName>
          <ScramblerComponent text={userInfoProps.intraId} />
        </UserName>
        <UserWallet>Wallet: {userInfoProps.wallet}</UserWallet>
        <UserCoalition>Coalition: {userInfoProps.coalition}</UserCoalition>
      </UserInfoList>
    </MyPageUserInfoContainer>
  );
};

export default UserInfoContainer;
