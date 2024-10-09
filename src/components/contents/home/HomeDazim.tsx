import showToast from '@lib/utils/toast';

import { ReactComponent as DodoesdidFull } from '@assets/images/common/dodoesdid-full.svg';
import { ReactComponent as DodoesdidHalf } from '@assets/images/common/dodoesdid-half.svg';
import { ReactComponent as DodoesdidHide } from '@assets/images/common/dodoesdid-hide.svg';
import { ReactComponent as PlusIcon } from '@assets/images/home/plus.svg';

import { Groups } from '../../../types/groups';
import { User } from '../../../types/user';
import { Tooltip } from 'antd';
import React from 'react';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: User | any;
  isMe?: boolean;
  groups?: Groups;
  onClick?: () => void;
};

const HomeDazim = ({ user, isMe, groups, onClick }: Props) => {
  return (
    <>
      {groups?.length === 0 ? (
        <div
          className="w-full aspect-square"
          onClick={() => showToast('그룹을 먼저 등록하세요.')}
        >
          <div className="mx-[4px] my-[8px] flex gap-[8px] items-center">
            <div className="w-[36px] aspect-square rounded-full flex justify-center overflow-hidden items-center border-[0.6px] border-solid border-gray-40 dark:border-[#444]">
              <img
                src={user.profile?.thumbnail}
                alt="유저이미지"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <p className="text-gray-100 text-[16px] dark:text-gray-30">
              {user.profile?.nickName}
            </p>
          </div>
          <div className="w-full aspect-square rounded-[16px] bg-gray-30 flex justify-center items-center cursor-pointer dark:bg-[#2a2a2a]">
            <PlusIcon />
          </div>
        </div>
      ) : isMe ? (
        <Tooltip
          open={!user?.dazim?.isSuccess}
          placement="right"
          title={
            !user?.dazim ? (
              <span>
                시작이 반이에요.
                <br />
                다짐을 등록하고 실천해보세요!
              </span>
            ) : (
              <span>
                다짐을 완료하셨다면,
                <br />
                인증샷을 업로드 하세요!
              </span>
            )
          }
          color="#3F73F7"
          overlayInnerStyle={{ padding: '12px', borderRadius: '12px' }}
        >
          <div className="mx-[4px] my-[8px] flex gap-[8px] items-center">
            <div className="w-[36px] aspect-square rounded-full flex justify-center overflow-hidden items-center border-[0.6px] border-solid border-gray-40 dark:border-[#444]">
              <img
                src={user.profile?.thumbnail}
                alt="유저이미지"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <p className="text-gray-100 text-[16px] dark:text-gray-30">
              {user.profile?.nickName}
            </p>
          </div>
          <div
            className="w-full aspect-square rounded-[16px] flex justify-center overflow-hidden items-center bg-gray-30 cursor-pointer relative dark:bg-[#2a2a2a] border-[1px] border-solid border-[#ddd] dark:border-[#444]"
            onClick={onClick}
          >
            {/* 사진 */}
            {user?.dazim?.photo ? (
              <img
                src={user?.dazim?.photo}
                alt="다짐이미지"
                className="w-[100%] h-[100%] object-cover"
              />
            ) : (
              <PlusIcon />
            )}
            {/* 두더지 */}
            {!user?.dazim ? (
              <DodoesdidHide className="absolute bottom-[44px] right-[10px]" />
            ) : !user?.dazim?.isSuccess ? (
              <DodoesdidHalf className="absolute bottom-[44px] right-[10px]" />
            ) : (
              <DodoesdidFull className="absolute bottom-[44px] right-[10px]" />
            )}

            {/* 글 */}
            {user?.dazim?.content && (
              <p className="w-[136px] py-[4px] px-[8px] truncate text-center bg-[rgba(0,0,0,.7)] rounded-[4px] text-white text-[14px] absolute bottom-[10px]">
                {user?.dazim?.content}
              </p>
            )}
          </div>
        </Tooltip>
      ) : (
        <>
          <div className="mx-[4px] my-[8px] flex gap-[8px] items-center">
            <div className="w-[36px] aspect-square rounded-full flex justify-center overflow-hidden items-center border-[0.6px] border-solid border-gray-40 dark:border-[#444]">
              <img
                src={user.profile?.thumbnail}
                alt="유저이미지"
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <p className="text-gray-100 text-[16px] dark:text-gray-30">
              {user.profile?.nickName}
            </p>
          </div>
          <div className="w-full aspect-square rounded-[16px] flex justify-center overflow-hidden items-center bg-gray-30 cursor-pointer relative dark:bg-[#2a2a2a] border-[1px] border-solid border-[#ddd] dark:border-[#444]">
            {/* 사진 */}
            {user?.dazim?.photo && (
              <img
                src={user?.dazim?.photo}
                alt="다짐이미지"
                className="w-[100%] h-[100%] object-cover"
              />
            )}
            {/* 두더지 */}
            {!user?.dazim ? (
              <DodoesdidHide className="absolute bottom-[44px] right-[10px]" />
            ) : !user?.dazim?.isSuccess ? (
              <DodoesdidHalf className="absolute bottom-[44px] right-[10px]" />
            ) : (
              <DodoesdidFull className="absolute bottom-[44px] right-[10px]" />
            )}
            {/* 글 */}
            {user?.dazim?.content && (
              <p className="w-[136px] py-[4px] px-[8px] truncate text-center bg-[rgba(0,0,0,.7)] rounded-[4px] text-white text-[14px] absolute bottom-[10px]">
                {user?.dazim?.content}
              </p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default HomeDazim;
