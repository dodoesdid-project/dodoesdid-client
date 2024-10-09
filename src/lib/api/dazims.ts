import { Dazims } from '../../types/dazims';
import { defaultAxios } from './deafultAxios';
import { AxiosResponse } from 'axios';

// 다짐 리스트 조회 = 그룹회원전체조회(api)
export const getDazims = async (
  groupId: string,
  date: string,
): Promise<AxiosResponse<Dazims>> => {
  return await defaultAxios.get(
    `/api/v1/groups/${groupId}/users?dazimCreateAt=${date}`,
  );
};

// 다짐 글 등록 = 그룹다짐등록(api)
export const createDazimTitle = async (data: {
  groupId: string;
  content: string;
}) => {
  await defaultAxios.post(`/api/v1/groups/${data.groupId}/dazim`, {
    content: data.content,
  });
};

// 다짐 이미지 등록 = 다짐완료
export const createDazimImageUpload = async (data: {
  photo: File;
  dazimId: string;
}) => {
  const formData = new FormData();
  formData.append('photo', data.photo);
  return await defaultAxios.post(
    `/api/v1/dazims/${data.dazimId}/complete`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
};
