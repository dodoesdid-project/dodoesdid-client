import { Dazims } from '../../types/dazims';
import { defaultAxios } from './deafultAxios';
import { AxiosResponse } from 'axios';

// 다짐 리스트 조회
export const getDazims = async (
  groupId: string,
  date: string,
): Promise<AxiosResponse<Dazims>> => {
  return await defaultAxios.get(`/api/v1/group/${groupId}/dazims?date=${date}`);
};

// 다짐 글 등록
export const createDazimTitle = async (data: {
  groupId: string;
  content: string;
}) => {
  await defaultAxios.post(`/api/v1/dazim`, data);
};

// 다짐 이미지 등록 = 다짐완료
export const createDazimImageUpload = async (data: {
  photo: File;
  dazimId: string;
}) => {
  const formData = new FormData();
  formData.append('photo', data.photo);
  return await defaultAxios.post(
    `/api/v1/dazim/${data.dazimId}/complete`,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
};
