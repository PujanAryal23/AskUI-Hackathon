import { UiControlClient, UiController } from 'askui';

// Server for controlling the operating system
let uiController: UiController;

// Client is necessary to use the askui API
// eslint-disable-next-line import/no-mutable-exports
let aui: UiControlClient;

jest.setTimeout(60 * 1000 * 60);

beforeAll(async () => {
  uiController = new UiController();

  await uiController.start();

  aui = await UiControlClient.build({
    credentials: {
      workspaceId: '39aaf898-37f7-461f-b069-2bb1485a9679',
      token: 'qKbw7vrzeq1g_BIuKpL95ekjczkk6qc8',
    }
  });

  await aui.connect();
});

afterAll(async () => {
  await uiController.stop();

  aui.close();
});

export { aui };
