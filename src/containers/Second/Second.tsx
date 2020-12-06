import { observer } from "mobx-react";
import { FC, useEffect, useMemo } from "react";
import { Table } from "antd";
import type { ColumnType } from "antd/lib/table";
import { postStore } from "../../store";

const Second: FC = (props) => {
  useEffect(() => {
    postStore.requestData("https://jsonplaceholder.typicode.com/posts");
    return () => {
      postStore.clearData();
    };
  }, []);

  const columns: ColumnType<any>[] = useMemo(
    () => [
      {
        key: "id",
        dataIndex: "id",
        title: "Id",
      },
      {
        key: "userId",
        dataIndex: "userId",
        title: "UserId",
      },
      {
        key: "title",
        dataIndex: "title",
        title: "Title",
      },
      {
        key: "body",
        dataIndex: "body",
        title: "Body",
      },
    ],
    []
  );

  const dataSource = useMemo(
    () => [
      {
        id: postStore.model?.id,
        userId: postStore.model?.userId,
        body: postStore.model?.body,
        title: postStore.model?.title,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [postStore.model]
  );

  return (
    <>
      <Table
        showHeader={true}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
    </>
  );
};

export default observer(Second);
