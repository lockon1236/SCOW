/**
 * Copyright (c) 2022 Peking University and Peking University Institute for Computing and Digital Economy
 * SCOW is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import { Space, Tooltip } from "antd";
import { useStore } from "simstate";
import { SingleClusterSelector } from "src/components/ClusterSelector";
import { ThemeClusterOutlined } from "src/components/ThemeClusterOutlined";
import { DefaultClusterStore } from "src/stores/DefaultClusterStore";

export const DefaultClusterSelector: React.FC = () => {
  const defaultClusterStore = useStore(DefaultClusterStore);

  return (
    <Space>
      <Tooltip title="需要选择集群的功能将会默认选择默认集群">
        <ThemeClusterOutlined />
      </Tooltip>
      <SingleClusterSelector
        value={defaultClusterStore.cluster}
        onChange={(cluster) => {
          defaultClusterStore.setCluster(cluster);
        }}
        label="选择默认集群"
      />
    </Space>

  );
};