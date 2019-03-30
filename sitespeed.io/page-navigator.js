const PAGE_URL = process.env.PAGE_URL
module.exports = async function (context, commands) {
    await commands.measure.start(PAGE_URL);
    await commands.measure.start(PAGE_URL + '/create-wallet');
    return commands.measure.start(PAGE_URL + '/team');
    //return commands.measure.start(PAGE_URL + '/access-my-wallet');
};