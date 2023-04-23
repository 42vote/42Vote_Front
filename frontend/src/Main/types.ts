export interface selectTagProps {
  selectedTag: string[];
  setSelectedTag: React.Dispatch<React.SetStateAction<string[]>>;
}

export interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export interface responsiveVariable {
  isFiveCards: boolean;
  isFourCards: boolean;
  isThreeCards: boolean;
  isDesktop: boolean;
  isMobile: boolean;
}
