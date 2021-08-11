const Commands = require('./Command/Commands');
const ArgumentMapper = require('./Argument/ArgumentMapper');

module.exports = class JsCs {
    initialize(
        cmd,
        args
    ) {
        if (!Commands.has(String(cmd))) {
            console.error(`Command ${cmd} is not defined.`);
        }

        const CommandClass = require(`./Command/${String(cmd)}`);
        const CommandObject = new CommandClass;

        CommandObject.execute(
            ArgumentMapper.map(args, CommandObject.validArguments())
        );
    }
}