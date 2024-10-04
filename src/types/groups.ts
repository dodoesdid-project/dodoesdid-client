export type Group = {
  id: string;
  name: string;
  thumbnail: string;
  inviteCode: string;
  notice: string | null;
};

export type Groups = Group[];
