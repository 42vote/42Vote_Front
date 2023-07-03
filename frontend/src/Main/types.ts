export interface selectTagProps {
  selectedTag: string[];
  setSelectedTag: React.Dispatch<React.SetStateAction<string[]>>;
  isMain: boolean;
}

export interface CardProps {
  id : string,
  title :string,
  goal : string,
  image: string,
  voteCnt : string, 
  isVoteExpired : string,
}

export interface responsiveVariable {
  isFiveCards: boolean;
  isFourCards: boolean;
  isThreeCards: boolean;
  isTwoCards: boolean;
  isScreen: boolean;
  isDesktop: boolean;
  isMobile: boolean;
  isSmallScreen: boolean,
  isMediumScreen: boolean,
  isBigScreen: boolean,
}

export interface documentListQuery {
  categoryId: string,
  listSize: string,
  expired: string,
  myPost: string,
  myVote: string,
}