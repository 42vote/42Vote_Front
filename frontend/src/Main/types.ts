export interface selectTagProps {
  selectedTag: string[];
  setSelectedTag: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CardProps {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  tag: string,

  // id: number;
  // title: string;
  // goal: number;
  // voteCnt: number;
  // isVoteExpired: boolean;
  // image: string;
}

export interface responsiveVariable {
  isFiveCards: boolean;
  isFourCards: boolean;
  isThreeCards: boolean;
  isDesktop: boolean;
  isMobile: boolean;
}

export interface documentListQuery {
  categoryId: string,
  listSize: string,
  listIndex: string,
  myPost: string,
  myVote: string,
}

export interface categoryRes {
  id: string,
  title: string,
  expired: string,
}