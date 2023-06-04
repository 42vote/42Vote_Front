import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isFiveCards: boolean = useMediaQuery({ query: "(min-width: 1244px)" });
  const isFourCards: boolean = useMediaQuery({
    query: "(min-width: 1022px) and (max-width: 1243px)",
  });
  const isThreeCards: boolean = useMediaQuery({
    query: "(min-width: 801px) and (max-width: 1021px)",
  });
  const isTwoCards: boolean = useMediaQuery({
    query: "(min-width: 534px) and (max-width: 800px)",
  });
  const isDesktop: boolean = useMediaQuery({ query: "(min-width: 534px)" });
  const isMobile : boolean = useMediaQuery({ query: "(max-width: 533px)" });

  return (
    {
        isFiveCards: isFiveCards,
        isFourCards: isFourCards,
        isThreeCards: isThreeCards,
        isTwoCards: isTwoCards,
        isDesktop: isDesktop,
        isMobile: isMobile
    }
  )
}
