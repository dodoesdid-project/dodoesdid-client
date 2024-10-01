import { defaultAxios } from '@lib/api/deafultAxios';

// 이메일 인증 보내기
export const emailAuthSend = async (email: string) => {
  await defaultAxios.post(`/api/v1/auth/email-verification-code-send`, {
    email,
  });
};

// 이메일 인증번호 맞는지 비교
export const emailAuthCompare = async (data: {
  email: string;
  code: string;
}) => {
  await defaultAxios.post(`/api/v1/auth/email-verify`, data);
};

// 이메일 비밀번호재설정 링크보내기
export const emailAuthResetPassword = async (data: { email: string }) => {
  return defaultAxios.post(`/api/v1/auth/password-find-email-send`, data);
};

// 이메일 중복검사
export const emailDuplicate = async (data: { email: string }) => {
  await defaultAxios.post(`/api/v1/user/email-duplicate-check`, data);
};

// 휴대폰 중복검사
export const phoneDuplicate = async (data: { phone: string }) => {
  await defaultAxios.post(`/api/v1/user/phone-duplicate-check`, data);
};

// 회원가입
export const createUser = async (data: {
  email: string;
  password: string;
  name: string;
  birth: string;
  phone: string;
}) => {
  await defaultAxios.post(`/api/v1/user/sign-up`, data);
};

// 아이디찾기
export const userIdFind = async (data: { phone: string }) => {
  return await defaultAxios.post(`/api/v1/auth/email-find`, data);
};

// 비밀번호변경
export const userPasswordReset = async (data: { password: string }) => {
  await defaultAxios.post(`/api/v1/user/me/password`, data);
};

// 로그인
export const login = async (data: { email: string; password: string }) => {
  return await defaultAxios.post(`/api/v1/auth/sign-in`, data);
};

// 개인프로필등록
export const profile = async ({
  image,
  nickname,
}: {
  image: File;
  nickname: string;
}) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('nickname', nickname);
  return await defaultAxios.post(`/user/profile`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
