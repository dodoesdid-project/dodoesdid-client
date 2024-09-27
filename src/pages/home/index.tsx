import TopBar from '@components/common/TopBar';
import NoProfileGuide from '@components/contents/home/NoProfileGuide';

import React from 'react';

const Homepage = () => {
  return (
    <div>
      <TopBar title="홈" />
      <NoProfileGuide />
    </div>
  );
};

export default Homepage;
