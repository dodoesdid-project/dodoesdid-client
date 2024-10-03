export type User = {
  id: string;
  email: string;
  name: string;
  birth: string;
  phone: string;
  profile: {
    nickName: string;
    thumbnail: string;
  } | null;
};
