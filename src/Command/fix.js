module.exports = class Command {
    validArguments() {
        return ['dir'];
    }

    execute(args) {
        console.log(args);
    }
}