(function () {
    // スコープ汚染を防ぐため、即時関数で囲む
    const e8link = require("./tasks/e8link");

    const main = async () => {
        await e8link.run();
    };

    window.onload = () => {
        main();
    }

})();