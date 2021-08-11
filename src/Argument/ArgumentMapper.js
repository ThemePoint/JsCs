module.exports = class ArgumentMapper {
    static map(
        args,
        valid,
        defaults
    ) {
        const mappedArgs = {};

        [].forEach.call(args, (a) => {
            let match = (/((--)([a-zA-Z0-9]*)(\=)?(.*)?)/gm).exec(a);

            if (null === match) {
                return;
            }

            if (!valid.includes(match[3])) {
                return;
            }

            mappedArgs[match[3]] = match[5];
        });

        for (const [k, d] of Object.entries(defaults)) {
            if (!(k in mappedArgs)) {
                mappedArgs[k] = d;
            }
        }

        return mappedArgs;
    }
}