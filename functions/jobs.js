const fetch = require("node-fetch");
const WORKABLE_API_ENDPOINT =
  "https://cuberg.workable.com/spi/v3/jobs?state=published";

exports.handler = async (event, context) => {
  const response = await fetch(WORKABLE_API_ENDPOINT, {
    method: "GET",
    withCredentials: true,
    credentials: "include",
    headers: {
      Authorization: `Bearer ${process.env.WORKABLE_API}`,
    },
  });
  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
