export interface IDazimData {
  id: string;
  name: string;
  dazimSuccessDates: string[];
}
export interface IWeeklyCalendar {
  now: Date;
  isRecordView: boolean;
  data?: IDazimData[];
}

export interface IWeeklyUnit {
  now: Date;
  group: IDazimData;
  isRecordView: boolean;
}
export interface IGroupSuccessParams {
  successType: 'PERSONAL' | 'GROUP';
  dazimStartDate: string;
  dazimEndDate: string;
}

export interface IGroupDetail {
  now: Date;
  data: IDazimData[];
  isRecordView: boolean;
}

export interface IMultiModal {
  onClose: () => void;
  now: Date;
  group: IDazimData;
  isRecordView: boolean;
}
export interface ISingleDetail {
  now: Date;
  successDates: string[];
  isRecordView: boolean;
  className?: string;
}

export interface IMonthlyCard {
  now: Date;
  group: IDazimData;
  isRecordView: boolean;
}

export interface IDateNavigator {
  isMonthlyView: boolean;
  now: Date;
  setNow: React.Dispatch<React.SetStateAction<Date>>;
}
export interface ITap {
  title: string;
  isActive: boolean;
  onClick: () => void;
}
