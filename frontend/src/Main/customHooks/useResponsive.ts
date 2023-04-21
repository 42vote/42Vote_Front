import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isFiveCards: boolean = useMediaQuery({ query: "(min-width: 1244px)" });
  const isFourCards: boolean = useMediaQuery({
    query: "(min-width: 1022px) and (max-width: 1243px)",
  });
  const isThreeCards: boolean = useMediaQuery({
    query: "(min-width: 801px) and (max-width: 1021px)",
  });
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 800px)" });
  const isMobile : boolean = useMediaQuery({ query: "(max-width: 799px)" });

  return (
    {
        isFiveCards: isFiveCards,
        isFourCards: isFourCards,
        isThreeCards: isThreeCards,
        isDesktop: isDesktop,
        isMobile: isMobile
    }
  )
}
