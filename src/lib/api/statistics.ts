import { IGroupSuccessParams } from '../../types/statisticsType';
import { defaultAxios } from './deafultAxios';

export const dazimSuccessDates = async (params: IGroupSuccessParams) => {
  const { successType, dazimStartDate, dazimEndDate } = params;
  try {
    const res = await defaultAxios.get('/api/v1/groups/dazim-success-dates', {
      params: {
        dazimSuccessType: successType,
        dazimStartDate,
        dazimEndDate,
      },
    });
    return res.data;
  } catch (err) {
    console.error('statistics err:', err);
    throw err;
  }
};
