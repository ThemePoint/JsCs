const fixerList = require("../Fixer/FixerList");
module.exports = class Command {
    validArguments() {
        return ['dir', 'config'];
    }

    defaultArguments() {
        return {
            'config': '../../config/default.js'
        }
    }

    execute(args) {
        let config = new (require(args.config));
        let fixerList = require('../Fixer/FixerList');

        [].forEach.call(config.fixer(), (f) => {
            if (!fixerList.includes(f)) {
                console.error(`Fixer ${f} is not defined.`);
            }

            console.log(f);
        })
    }
}