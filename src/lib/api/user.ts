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

// 이메일 비밀번호재설정 링크보내기
export const emailAuthResetPassword = async (data: { email: string }) => {
  return defaultAxios.post(`email/reset-email`, data);
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

// 아이디찾기
export const userIdFind = async (data: { userPhone: string }) => {
  return await defaultAxios.post(`/user/find-id`, data);
};

// 비밀번호재설정
export const userPasswordReset = async (data: {
  token: string;
  password: string;
}) => {
  await defaultAxios.post(`/user/reset-password`, data);
};

// 로그인
export const login = async (data: { username: string; password: string }) => {
  return await defaultAxios.post(`/login`, data);
};
