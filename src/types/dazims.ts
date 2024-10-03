export type Dazims =
  | {
      id: string;
      isMe: boolean;
      profile: {
        nickName: string;
        thumbnail: string;
      } | null;
      dazim: {
        id: string;
        groupId: string;
        content: string | null;
        photo: string | null;
        isSuccess: true;
      } | null;
    }[]
  | null;
