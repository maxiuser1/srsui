import { AzureFunction, Context, HttpRequest } from '@azure/functions';

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');
  const responseMessage = 'hola demo';

  context.res = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      resu: responseMessage,
    },
  };
};

export default httpTrigger;
