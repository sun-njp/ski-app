import { APIGatewayProxyHandler, APIGatewayProxyEvent } from "aws-lambda";
import { createResponse } from "../../lib/response";

const USERS = [
  { id: "1", name: "田中" },
  { id: "2", title: "佐藤" },
  { id: "3", title: "山田" },
];

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  console.log(
    "pathParameters = " + JSON.stringify(event.pathParameters, undefined, 2)
  );

  // ユーザーID
  const principalId = event.requestContext.authorizer?.principalId;

  const id = event.pathParameters?.["id"];

  // return createResponse(USERS.find((b) => b.id === id))
  return createResponse(USERS[0]);
};