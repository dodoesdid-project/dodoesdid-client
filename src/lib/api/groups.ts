import { defaultAxios } from '@lib/api/deafultAxios';

import { Groups } from '../../types/groups';
import { AxiosResponse } from 'axios';

// 그룹 전체목록 조회
export const getGroups = async (): Promise<AxiosResponse<Groups>> => {
  return await defaultAxios.get(`/api/v1/groups`);
};

// 그룹 생성
export const createGroup = async ({
  thumbnail,
  name,
}: {
  thumbnail: File;
  name: string;
}) => {
  const formData = new FormData();
  formData.append('thumbnail', thumbnail);
  formData.append('name', name);
  return await defaultAxios.post(`/api/v1/group`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// 그룹 상세 조회
export const getGroupDetail = async (id: string) => {
  const { data } = await defaultAxios.get(`/api/v1/group/${id}`);
  return data;
};

// 그룹 입장
export const enterGroup = async (inviteCode: string) => {
  return await defaultAxios.post(`/api/v1/group/enter`, { inviteCode });
};

// 그룹 순서 변경
export const updateGroupOrder = async (ids: string[]) => {
  return await defaultAxios.put(`/api/v1/groups/order`, { ids });
};

// 그룹 이름 변경
export const updateGroupName = async ({
  id,
  name,
}: {
  id: string;
  name: string;
}) => {
  return await defaultAxios.patch(`/api/v1/group/${id}/name`, {
    name,
  });
};

// 그룹 썸네일 변경
export const updateGroupImage = async ({
  thumbnail,
  id,
}: {
  thumbnail: File;
  id: string;
}) => {
  const formData = new FormData();
  formData.append('thumbnail', thumbnail);
  return await defaultAxios.patch(`/api/v1/group/${id}/thumbnail`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

// 그룹 공지 변경
export const updateGroupNotice = async ({
  id,
  notice,
}: {
  id: string;
  notice: string;
}) => {
  return await defaultAxios.patch(`/api/v1/group/${id}/notice`, { notice });
};

// 그룹 나가기
export const deleteGroup = async (id: string) => {
  return await defaultAxios.delete(`/api/v1/group/${id}/leave`);
};
