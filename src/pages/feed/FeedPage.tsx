import { getFeeds } from '@lib/api/feed';

import TopBar from '@components/common/TopBar';
import FeedCard from '@components/contents/feed/feedCard/FeedCard';

import { useQuery } from '@tanstack/react-query';

import { IFeed } from '../../types/feedType';
import { useNavigate } from 'react-router-dom';
import PullToRefresh from 'react-simple-pull-to-refresh';

const FeedPage = () => {
  const navigate = useNavigate();

  const { data: feeds, refetch } = useQuery<IFeed[]>({
    queryKey: ['feeds'],
    queryFn: getFeeds,
    refetchOnWindowFocus: false,
  });

  const feedRefresh = (): Promise<void> => {
    return new Promise((res) => {
      refetch();
      res();
    });
  };

  // 피드 최신 등록 순으로 뿌리기
  const newFeeds = feeds
    ? [...feeds].sort(
        (a, b) =>
          new Date(b.updateAt).getTime() - new Date(a.updateAt).getTime(),
      )
    : [];

  return (
    <>
      <TopBar backLink="" title="피드" close={false} />
      <PullToRefresh onRefresh={feedRefresh} pullingContent={''}>
        <div className="px-4">
          {newFeeds &&
            newFeeds.map((feed) => (
              <FeedCard
                key={feed.id}
                id={feed.id}
                name={feed.user.profile?.nickName || ''}
                time={feed.updateAt}
                profileImageUrl={feed.user.profile?.thumbnail || ''}
                dazimImageUrl={feed.photo || ''}
                onClick={() => navigate(`/feed/${feed.id}`)}
                overlayText={feed.content}
                showActionIcons={true}
                reactionCount={feed.reactionCount}
                commentCount={feed.commentCount}
              />
            ))}
        </div>
      </PullToRefresh>
    </>
  );
};

export default FeedPage;
