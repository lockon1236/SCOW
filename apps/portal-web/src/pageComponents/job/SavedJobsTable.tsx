import { Button, Form, Space, Table } from "antd";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { useAsync } from "react-async";
import { api } from "src/apis";
import { SingleClusterSelector } from "src/components/ClusterSelector";
import { FilterFormContainer } from "src/components/FilterFormContainer";
import type { SavedJob } from "src/generated/portal/job";
import type { Cluster } from "src/utils/config";
import { CLUSTERS } from "src/utils/config";
import { formatDateTime } from "src/utils/datetime";

interface Props {}

interface FilterForm {
  cluster: Cluster;
}

export const SavedJobsTable: React.FC<Props> = () => {

  const [query, setQuery] = useState<FilterForm>(() => {
    return {
      cluster: CLUSTERS[0],
    };
  });

  const [form] = Form.useForm<FilterForm>();

  const promiseFn = useCallback(async () => {
    return await api.getSavedJobs({ query: {
      cluster: query.cluster.id,
    } }).then((x) => x.results);
  }, [query.cluster]);

  const { data, isLoading, reload } = useAsync({ promiseFn });

  return (
    <div>
      <FilterFormContainer>
        <Form<FilterForm>
          layout="inline"
          form={form}
          initialValues={query}
          onFinish={async () => {
            setQuery({
              ...await form.validateFields(),
            });
          }}
        >
          <Form.Item label="集群" name="cluster">
            <SingleClusterSelector />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">搜索</Button>
              <Button loading={isLoading} onClick={reload}>刷新</Button>
            </Space>
          </Form.Item>
        </Form>
      </FilterFormContainer>
      <InfoTable
        data={data}
        isLoading={isLoading}
        cluster={query.cluster}
      />
    </div>
  );
};

interface InfoTableProps {
  data?: SavedJob[];
  isLoading: boolean;
  cluster: Cluster;
}

const InfoTable: React.FC<InfoTableProps> = ({
  data,  isLoading, cluster,
}) => {

  return (
    <Table
      dataSource={data}
      loading={isLoading}
      pagination={{ showSizeChanger: true }}
      rowKey={(x) => x.jobName}
      scroll={{ x: true }}
    >
      <Table.Column<SavedJob> dataIndex="jobName" title="作业名"
        render={(_, r) => (
          <Link href={`/files/${cluster.id}/${r.dirPath}`}>
            {r.jobName}
          </Link>
        )}
      />
      <Table.Column<SavedJob> dataIndex="submitTime" title="提交时间"
        render={(v) => formatDateTime(v)}
      />
      <Table.Column<SavedJob> dataIndex="comment" title="备注" />
      <Table.Column<SavedJob> title="更多"
        render={(_, r) => (
          <Space>
            <Link href={{
              pathname: "/jobs/submit",
              query: {
                cluster: cluster.id,
                jobName: r.jobName,
              },
            }}
            >
              作为模板提交作业
            </Link>
          </Space>
        )}
      />
    </Table>
  );
};


