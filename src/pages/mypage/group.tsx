import { getGroups, updateGroupOrder } from '@lib/api/groups';

import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';

import { ReactComponent as SortIcon } from '@assets/images/common/sort.svg';

// import MyPageGroupList from '@components/contents/mypage/MyPageGroupList';
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useMutation, useQuery } from '@tanstack/react-query';

import { Group, Groups } from '../../types/groups';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { AxiosResponse } from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}

const Row: React.FC<Readonly<RowProps>> = (props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move',
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr
      {...props}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

const MyGroupPage = () => {
  const navigate = useNavigate();

  const columns: TableColumnsType<Group> = [
    {
      title: '',
      dataIndex: 'thumbnail',
      render: (thumbnail, record) => (
        <img
          src={thumbnail}
          alt="그룹프로필이미지"
          className="w-[48px] aspect-square rounded-full"
          onClick={() => onClickGroup(record)}
        />
      ),
    },
    {
      title: '',
      dataIndex: 'name',
      render: (name, record) => (
        <p
          className="text-gray-100 text-[16px] font-semibold dark:text-gray-30"
          onClick={() => onClickGroup(record)}
        >
          {name}
        </p>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      render: (record) => (
        <SortIcon onClick={() => onClickGroup(record)} /> // 클릭 핸들러 추가
      ),
    },
  ];

  const onClickGroup = (record: Group) => {
    navigate(`/mypage/group/info?id=${record.id}`);
  };

  const { data: groups, refetch: refetchGroups } = useQuery<
    AxiosResponse<Groups>
  >({
    queryKey: ['groups'],
    queryFn: getGroups,
  });

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!groups) {
      return;
    }
    if (active.id !== over?.id) {
      const activeIndex = groups.data.findIndex((i) => i.id === active?.id);
      const overIndex = groups.data.findIndex((i) => i.id === over?.id);
      updateGroupOrderMutation.mutate(
        arrayMove(groups.data, activeIndex, overIndex).map((group) => group.id),
      );
    }
  };

  const updateGroupOrderMutation = useMutation({
    mutationFn: updateGroupOrder,
    onSuccess: () => {
      refetchGroups();
    },
    onError: () => {},
  });

  return (
    <div>
      <TopBar title="그룹관리" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="mb-[24px] text-gray-100 font-semibold text-[16px] dark:text-gray-30">
          내 그룹
        </p>
        {groups?.data.length === 0 || !groups ? (
          <div>
            <p className="text-gray-100 text-[16px] mb-[22px] text-center mt-[110px] dark:text-gray-30">
              아직 그룹이 없으시네요, 그룹을 생성해주세요!
            </p>
            <Button
              buttonType="fill-semibold"
              name="그룹 생성하기"
              style={{ marginBottom: '102px' }}
              onClick={() => navigate('/home/profile-group')}
            />
            <img src=" http://via.placeholder.com/640x480" alt="두더지이미지" />
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              // rowKey array
              items={groups.data.map((group) => group.id)}
              strategy={verticalListSortingStrategy}
            >
              <Table<Group>
                components={{
                  body: { row: Row },
                }}
                rowKey="id"
                columns={columns}
                dataSource={groups.data.map((group) => ({
                  id: group.id,
                  name: group.name,
                  thumbnail: group.thumbnail,
                  inviteCode: group.inviteCode,
                }))}
                pagination={false}
                className="bg-[transparent]"
              />
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
};

export default MyGroupPage;
