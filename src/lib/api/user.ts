import { defaultAxios } from '@lib/api/deafultAxios';

import { User } from '../../types/user';
import { AxiosResponse } from 'axios';

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

// 비밀번호재설정 코드인증 (맞는지확인)
export const emailCodeVerifyPassword = async (data: { code: string }) => {
  return defaultAxios.post(`/api/v1/auth/password-find-code-verify`, data);
};

// 아이디찾기
export const userIdFind = async (data: { phone: string }) => {
  return await defaultAxios.post(`/api/v1/auth/email-find`, data);
};

// 로그인
export const login = async (data: {
  email: string;
  password: string;
  isAuto: boolean;
}) => {
  return await defaultAxios.post(`/api/v1/auth/sign-in`, data);
};

/* 위에는 auth로 , 밑에는 user로 나눌예정. 1차패포후에 정리예정 */

// 회원가입
export const createUser = async (data: {
  email: string;
  password: string;
  name: string;
  birth: string;
  phone: string;
}) => {
  await defaultAxios.post(`/api/v1/users/sign-up`, data);
};

// 이메일 중복검사
export const emailDuplicate = async (data: { email: string }) => {
  await defaultAxios.post(`/api/v1/users/email-duplicate-check`, data);
};

// 휴대폰 중복검사
export const phoneDuplicate = async (data: { phone: string }) => {
  await defaultAxios.post(`/api/v1/users/phone-duplicate-check`, data);
};

// 비밀번호변경
export const userPasswordReset = async (data: { password: string }) => {
  await defaultAxios.patch(`/api/v1/user/me/password`, data);
};

// 내정보조회
export const getUser = async (): Promise<AxiosResponse<User>> => {
  return await defaultAxios.get(`/api/v1/users/me`);
};

// 내프로필등록
export const profile = async ({
  nickname,
  thumbnail,
}: {
  nickname: string;
  thumbnail: File;
}) => {
  const formData = new FormData();
  formData.append('nickName', nickname);
  formData.append('thumbnail', thumbnail);
  return await defaultAxios.post(`/api/v1/users/me/profile`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// 닉네임변경
export const updateUserNickname = async (nickName: string) => {
  await defaultAxios.patch(`/api/v1/users/me/nickname`, { nickName });
};

// 패스워드검증
export const verifyPassword = async (password: string) => {
  await defaultAxios.post(`/api/v1/users/me/password-verify`, { password });
};

// 패스워드변경
export const updatePassword = async (password: string) => {
  await defaultAxios.patch(`/api/v1/users/me/password`, { password });
};

// 회원탈퇴
export const deleteUser = async (withdrawalReason: string) => {
  await defaultAxios.post(`/api/v1/users/me/withdrawal`, {
    withdrawalReason,
  });
};

// 로그아웃
export const logout = async () => {
  await defaultAxios.post(`/api/v1/auth/sign-out`);
};
