import { defaultAxios } from '@lib/api/deafultAxios';

// 그룹 전체목록 조회
export const getGroups = async () => {
  const { data } = await defaultAxios.get(`/api/v1/groups`);
  return data;
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
