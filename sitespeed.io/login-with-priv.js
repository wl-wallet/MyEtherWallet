const PAGE_URL = process.env.PAGE_URL;
module.exports = async function(context, commands) {
  await commands.measure.start('PrivateKey Access');
  await commands.navigate(PAGE_URL + '/access-my-wallet');
  await commands.click.byXpathAndWait("//button[text()='Onwards!']");
  await commands.click.byXpathAndWait("//h3[text()='Software']");
  await commands.click.byXpathAndWait("//span[text()='Private Key']");
  await commands.click.byXpathAndWait("//button[text()='Continue']");
  await commands.addText.byXpath(
    '0x11111740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cdecaf',
    "//input[@name='PrivateKey']"
  );
  await commands.click.byXpathAndWait(
    "//form[div[input[@name='PrivateKey']]]/button"
  );
  return commands.measure.stop();
};
