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

import { route } from "@ddadaal/next-typed-api-routes-runtime";
import { asyncClientCall } from "@ddadaal/tsgrpc-client";
import { Account, AccountServiceClient } from "@scow/protos/build/server/account";
import { getClient } from "src/utils/client";
import { DEFAULT_TENANT_NAME } from "src/utils/constants";
import { queryIfInitialized } from "src/utils/init";

export interface InitGetAccountsSchema {
  method: "GET";

  responses: {
    200: {
      accounts: Account[];
    }

    409: { code: "ALREADY_INITIALIZED"; }
  }
}

export default route<InitGetAccountsSchema>("InitGetAccountsSchema", async () => {

  const result = await queryIfInitialized();

  if (result) { return { 409: { code: "ALREADY_INITIALIZED" } }; }

  const client = getClient(AccountServiceClient);

  const reply = await asyncClientCall(client, "getAccounts", {
    tenantName: DEFAULT_TENANT_NAME,
  });

  return {
    200: {
      accounts: reply.results,
    },
  };

});