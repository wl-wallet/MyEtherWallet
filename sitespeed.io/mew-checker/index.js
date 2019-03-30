const path = require('path');
let log;
module.exports = {
  name() {
    return 'MEW_CHECKER';
  },
  open(context, options) {
    log = context.intel.getLogger('sitespeedio.plugin.MEW_CHECKER');
    // when sitespeed.io start it calls the open function once for all plugins
    // the context holds information for this specific run that
    // generated at runtime, for example you can get hold of the storageManager
    // that stores files to disk.
    // The options is the configuration supplied for the run.
  },
  processMessage(message, queue) {
    // if (message.type === 'domains.summary') log.info(message);
    // The plugin will get all messages sent through the queue
    // and can act on specific messages by type:
    // message.type
  },
  close(options, errors) {
    // When all URLs are finished all plugins close function is called once.
    // Options are the configuration options and errors a array of errors
    // from the run.
  }
};
