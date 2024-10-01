import { defaultAxios } from '@lib/api/deafultAxios';

// 그룹 전체목록 조회
export const getGroups = async () => {
  const { data } = await defaultAxios.get(`/api/v1/home`);
  return data;
};

// 그룹 생성
export const createGroup = async ({
  groupImage,
  groupName,
}: {
  groupImage: File;
  groupName: string;
}) => {
  const formData = new FormData();
  formData.append('groupImage', groupImage);
  formData.append('groupName', groupName);
  return await defaultAxios.post(`/api/v1/group`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
