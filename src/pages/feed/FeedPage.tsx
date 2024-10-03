import TopBar from '@components/common/TopBar';
import FeedCard from '@components/contents/feed/FeedCard/FeedCard';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';

const FeedPage = () => {
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6]);
  const navigate = useNavigate();

  const feedRefresh = (): Promise<void> => {
    return new Promise((res) => {
      setTimeout(() => {
        setDummy((item) => [item.length + 1, ...item]);
        res();
      }, 1000);
    });
  };

  return (
    <>
      <TopBar backLink="" title="피드" close={false} />
      <PullToRefresh onRefresh={feedRefresh} pullingContent={''}>
        <div className="px-4">
          {dummy.map((id, index) => (
            <FeedCard
              key={index}
              id={id}
              name="옐"
              time="1분 전"
              profileImageUrl="http://via.placeholder.com/40x40"
              dazimImageUrl="http://via.placeholder.com/362x362"
              onClick={() => navigate(`/feed/${id}`)}
              overlayText="책 10장 읽기 성공~"
              showActionIcons={true}
            />
          ))}
        </div>
      </PullToRefresh>
    </>
  );
};

export default FeedPage;
