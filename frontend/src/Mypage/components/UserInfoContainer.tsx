import { useResponsive } from "../../Main/customHooks/useResponsive";
import ScramblerComponent from "../effects/Scrambler";
import {
  MyPageUserInfoContainer,
  UserInfoList,
  UserName,
  UserWallet,
} from "../styles/styledComponents";

interface userInfoProps {
  intraId: string;
  wallet: number;
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
      </UserInfoList>
    </MyPageUserInfoContainer>
  );
};

export default UserInfoContainer;
