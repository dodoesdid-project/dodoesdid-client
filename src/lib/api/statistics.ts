import { defaultAxios } from './deafultAxios';

interface IGroupSuccessParams {
  startDate: string;
  endDate: string;
  successType: 'PERSONAL' | 'GROUP';
}

export const dazimSuccessDates = async (params: IGroupSuccessParams) => {
  const { startDate, endDate, successType } = params;
  try {
    const res = await defaultAxios.get('/api/v1/groups/dazim-success-dates', {
      params: {
        dazimStartDate: startDate,
        dazimEndDate: endDate,
        dazimSuccessType: successType,
      },
    });
    return res.data;
  } catch (err) {
    console.error('statistics err:', err);
    throw err;
  }
};
