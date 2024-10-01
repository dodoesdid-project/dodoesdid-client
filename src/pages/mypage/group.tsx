import Button from '@components/common/Button';
import TopBar from '@components/common/TopBar';
import MyPageGroupList from '@components/contents/mypage/MyPageGroupList';

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

import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import React, { ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
  key: string;
  group: ReactNode;
}

const columns: TableColumnsType<DataType> = [{ dataIndex: 'group' }];

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

  const [dataSource, setDataSource] = useState([
    {
      key: '1',
      group: (
        <MyPageGroupList
          imgPath="http://via.placeholder.com/640x480"
          name="그룹이름1"
          onClick={() => navigate('/mypage/group/info')}
        />
      ),
    },
    {
      key: '2',
      group: 'Jim Green',
    },
    {
      key: '3',
      group: 'Joe Black',
    },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
  );

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id);
        const overIndex = prev.findIndex((i) => i.key === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };

  return (
    <div>
      <TopBar title="그룹관리" onClickBack={() => navigate(-1)} />
      <div className="px-[16px]">
        <p className="mb-[24px] text-gray-100 font-semibold text-[16px] dark:text-gray-30">
          내 그룹
        </p>
        {/* 그룹o */}
        <DndContext
          sensors={sensors}
          modifiers={[restrictToVerticalAxis]}
          onDragEnd={onDragEnd}
        >
          <SortableContext
            // rowKey array
            items={dataSource.map((i) => i.key)}
            strategy={verticalListSortingStrategy}
          >
            <Table<DataType>
              components={{
                body: { row: Row },
              }}
              rowKey="key"
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              className="bg-[transparent]"
            />
          </SortableContext>
        </DndContext>
        {/* 그룹x  */}
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
      </div>
    </div>
  );
};

export default MyGroupPage;
