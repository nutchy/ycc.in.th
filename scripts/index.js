const yargs = require('yargs')
const path = require('path')
const root = path.dirname(__dirname)

yargs
  .command('update-screenshots', 'Updates the screenshots.', {}, args =>
    require('./update-screenshots').run()
  )
  .demandCommand()
  .help()
  .strict()
  .parse()
