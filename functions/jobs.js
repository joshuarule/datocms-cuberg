const fetch = require("node-fetch");
const WORKABLE_API_ENDPOINT =
  "https://cuberg.workable.com/spi/v3/jobs?state=published";

exports.handler = async (event, context) => {
  const response = await fetch(WORKABLE_API_ENDPOINT, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization:
        "Bearer 438ff1c1ab37f3dc5c5916ede443d15502e93e453a99a69399d33f4f0cbdfef4",
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
