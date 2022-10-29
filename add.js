exports.handler = async (event) => {
  const { num1, num2 } = JSON.parse(event.body);

  const result = num1 + num2;

  const output = { num1, num2, result };

  return {
    statusCode: 200,
    body: JSON.stringify(output),
  };
};
