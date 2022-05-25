import { Descriptions, Tag } from "antd";
import { NextPage } from "next";
import { requireAuth } from "src/auth/requireAuth";
import { Section } from "src/components/Section";
import { PlatformRoleTexts, TenantRoleTexts } from "src/models/User";
import { ChangePasswordForm } from "src/pageComponents/profile/ChangePasswordForm";
import { publicConfig } from "src/utils/config";
import { Head } from "src/utils/head";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Part = styled(Section)`
  min-width: 400px;
  max-width: 600px;
  flex: 1;
  margin: 0 16px 32px 0;
`;



export const ProfilePage: NextPage = requireAuth(() => true)(({ userStore: { user } }) => {

  return (
    <Container>
      <Head title="账号信息" />
      <Part title="当前登录信息">
        <Descriptions bordered column={1}>
          <Descriptions.Item label="用户ID">
            {user.identityId}
          </Descriptions.Item>
          <Descriptions.Item label="用户姓名">
            {user.name}
          </Descriptions.Item>
          {
            user.tenantRoles.length > 0 ? (
              <Descriptions.Item label="租户角色">
                {user.tenantRoles.map((x) => <Tag key={x}>{TenantRoleTexts[x]}</Tag>)}
              </Descriptions.Item>
            ) : undefined
          }
          {
            user.platformRoles.length > 0 ? (
              <Descriptions.Item label="平台角色">
                {user.platformRoles.map((x) => <Tag key={x}>{PlatformRoleTexts[x]}</Tag>)}
              </Descriptions.Item>
            ) : undefined
          }
        </Descriptions>
      </Part>
      {
        publicConfig.ENABLE_CHANGE_PASSWORD ? (
          <Part title="修改密码">
            <ChangePasswordForm />
          </Part>
        ) : undefined
      }
    </Container>
  );
});

export default ProfilePage;
