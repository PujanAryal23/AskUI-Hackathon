import { aui } from './helper/jest.setup';


// Following script build a jenkins job via chrome browser 
// and sends an email to a coworker to
// notify about build trigger
describe('Build Jenkins Job And Send An Email', () => {
  it('should build and send email', async () => {

    // Trigger Jenkins Build Via Chrome Browser
    await aui
      .click()
      .customElement({ customImage: "test/images/chrome.png", name: "chrome" })
      .exec();
    await aui.typeIn('http://localhost:8080/').url().exec();
    await aui.pressKey('enter').exec();
    await aui.click().text().withText('RobotTests').exec();
    await aui.click().text().withText('Build Now').exec();


    //Send an email to a co-worker regarding Jenkins Build Trigger Via Outlook Desktop Application
    await aui
    .click()
    .customElement({ customImage: "test/images/Outlook.png", name: "chrome" })
    .exec();
    await aui.click().button().withText('New Message').exec();
    await aui.waitFor(5000);

    await aui
    .typeIn('test@lp.com')
    .customElement({ customImage: "test/images/Receiver.png", name: "Reciever" })
    .exec();

    await aui.click().text().withText('From:').exec();

    await aui
    .typeIn('Jenkins Build Triggered')
    .customElement({ customImage: "test/images/Subject.png", name: "Subject" })
    .exec();
    

    await aui
    .typeIn('Hi buddy, Jenkins Build has been triggered. Please verify the test result.')
    .customElement({ customImage: "test/images/Email.png", name: "email" })
    .exec();

    await aui
    .click()
    .customElement({ customImage: "test/images/Send.png", name: "Send" })
    .exec();


  });
});
