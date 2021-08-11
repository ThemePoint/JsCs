module.exports = class Command {
    validArguments() {
        return ['dir', 'config'];
    }

    defaultArguments() {
        return {
            'config': './config/default_config.js'
        }
    }

    execute(args) {
        console.log(args);
    }
}