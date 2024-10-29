export const GA_TRACKING_ID = 'YOUR_GA_TRACKING_ID';

// 페이지 조회 함수 타입 정의
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

interface Event {
  action: string;
  category: string;
  label: string;
  value?: number;
}

// 이벤트 함수 타입 정의
export const event = ({ action, category, label, value }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
