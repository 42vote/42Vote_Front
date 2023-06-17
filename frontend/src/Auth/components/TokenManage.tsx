// interface TokenManagerProps {
//   accessToken: string;
//   refreshToken: string;
//   accessTokenExpiration: number; // Expiration time in seconds
//   onRefreshToken: () => Promise<string>;
// }

// const TokenManager: React.FC<TokenManagerProps> = ({
//   accessToken,
//   refreshToken,
//   accessTokenExpiration,
//   onRefreshToken,
//   children,
// }) => {
//   const [isTokenExpired, setIsTokenExpired] = useState(false);

//   useEffect(() => {
//     let accessTokenTimer: NodeJS.Timeout;

//     const startTokenExpirationTimer = () => {
//       accessTokenTimer = setTimeout(() => {
//         setIsTokenExpired(true);
//       }, accessTokenExpiration * 1000); // Convert expiration time to milliseconds
//     };

//     const handleTokenRefresh = async () => {
//       const newAccessToken = await onRefreshToken();
//       setIsTokenExpired(false);
//       clearTimeout(accessTokenTimer);
//       startTokenExpirationTimer();
//     };

//     startTokenExpirationTimer();

//     return () => {
//       clearTimeout(accessTokenTimer);
//     };
//   }, [accessTokenExpiration, onRefreshToken]);

//   useEffect(() => {
//     if (isTokenExpired) {
//       onRefreshToken().then(() => setIsTokenExpired(false));
//     }
//   }, [isTokenExpired, onRefreshToken]);

//   return <>{children}</>;
// };

// export default TokenManager;

const test = () => {
  return <></>;
};
