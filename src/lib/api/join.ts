import { defaultAxios } from '@lib/api/deafultAxios';

// 이메일 인증 보내기
export const emailAuthSend = async (email: string) => {
  await defaultAxios.post(`/email/send`, { email });
};

// 이메일 인증번호 맞는지 비교
export const emailAuthCompare = async (data: {
  email: string;
  verifyCode: string;
}) => {
  await defaultAxios.post(`/email/verify`, data);
};

// 회원가입
export const createUser = async (data: {
  userEmail: string;
  password: string;
  userName: string;
  userBirth: string;
  userPhone: string;
}) => {
  await defaultAxios.post(`/user/sign-up`, data);
};
