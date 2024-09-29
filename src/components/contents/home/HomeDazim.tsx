import useToggle from '@lib/hooks/useToggle';

import { ReactComponent as DodoesdidFull } from '@assets/images/common/dodoesdid-full.svg';
import { ReactComponent as DodoesdidHalf } from '@assets/images/common/dodoesdid-half.svg';
import { ReactComponent as DodoesdidHide } from '@assets/images/common/dodoesdid-hide.svg';
import { ReactComponent as PlusIcon } from '@assets/images/home/plus.svg';

import HomeDazimTitleDrawer from './HomeDazimTitleDrawer';
import HomeDazimUploadDrawer from './HomeDazimUploadDrawer';
import { Tooltip } from 'antd';
import React from 'react';

type HomeDazimProps = {
  state: string;
};

const HomeDazim = ({ state }: HomeDazimProps) => {
  const [isOpenTitleDrawer, toggleTitleDrawer] = useToggle();
  const [isOpenUploadDrawer, toggleUploadDrawer] = useToggle();

  return (
    <>
      <div className="w-full aspect-square">
        <div className="mx-[4px] my-[8px] flex gap-[8px] items-center">
          <img
            src="http://via.placeholder.com/640x480"
            alt="유저이미지"
            className="w-[36px] aspect-square rounded-full"
          />
          <p className="text-gray-100 text-[16px] dark:text-gray-30">
            사용자이름
          </p>
        </div>
        {state === 'null' && (
          <div className="w-full aspect-square rounded-[16px] bg-gray-30 flex justify-center items-center cursor-pointer dark:bg-[#2a2a2a]">
            <PlusIcon />
          </div>
        )}
        {state === 'hide' && (
          <Tooltip
            open
            placement="right"
            title={
              <span>
                시작이 반이에요.
                <br />
                다짐을 등록하고 실천해보세요!
              </span>
            }
            color="#3F73F7"
            overlayInnerStyle={{ padding: '12px' }}
          >
            <div className="w-full aspect-square rounded-[16px] bg-gray-30 flex justify-center items-center cursor-pointer relative dark:bg-[#2a2a2a]">
              <PlusIcon />
              <DodoesdidHide className="absolute bottom-[44px] right-[10px]" />
            </div>
          </Tooltip>
        )}
        {state === 'half' && (
          <Tooltip
            open
            placement="right"
            title={
              <span>
                다짐을 완료하셨다면,
                <br />
                인증샷을 업로드 하세요!
              </span>
            }
            color="#3F73F7"
            overlayInnerStyle={{ padding: '12px' }}
          >
            <div className="w-full aspect-square rounded-[16px] bg-gray-30 flex justify-center items-center cursor-pointer relative dark:bg-[#2a2a2a]">
              <PlusIcon />
              <DodoesdidHalf className="absolute bottom-[44px] right-[10px]" />
              <p className="w-[136px] py-[4px] text-center bg-[rgba(0,0,0,.7)] rounded-[4px] text-white text-[14px] absolute bottom-[10px]">
                책10장읽기
              </p>
            </div>
          </Tooltip>
        )}
        {state === 'full' && (
          <div className="w-full aspect-square rounded-[16px] bg-gray-30 flex cursor-pointer relative overflow-hidden dark:bg-[#2a2a2a]">
            <img src="http://via.placeholder.com/640x480" alt="" />
            <DodoesdidFull className="absolute bottom-[44px] right-[10px]" />
            <p className="w-[136px] py-[4px] text-center bg-[rgba(0,0,0,.7)] rounded-[4px] text-white text-[14px] absolute bottom-[10px] left-[50%] translate-x-[-50%]">
              책10장읽기
            </p>
          </div>
        )}
      </div>

      {isOpenTitleDrawer && (
        <HomeDazimTitleDrawer
          isOpen={isOpenTitleDrawer}
          onClose={toggleTitleDrawer}
        />
      )}
      {isOpenUploadDrawer && (
        <HomeDazimUploadDrawer onClose={toggleUploadDrawer} />
      )}
    </>
  );
};

export default HomeDazim;
