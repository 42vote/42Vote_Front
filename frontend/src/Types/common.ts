export interface categoryRes {
    id: string,
    title: string,
    goalSettable: boolean,
    goal: number,
    sort: number,
    expired: boolean,
  }
  
  export interface documentListRes {
    id : string,
    title :string,
    goal : string,
    image: string,
    voteCnt : string, 
    isVoteExpired : string,
  }