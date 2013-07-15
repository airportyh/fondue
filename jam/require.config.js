var jam = {
    "packages": [
        {
            "name": "async",
            "location": "jam/async",
            "main": "lib/async.js"
        }
    ],
    "version": "0.2.17",
    "shim": {}
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
        {
            "name": "async",
            "location": "jam/async",
            "main": "lib/async.js"
        }
    ],
    "shim": {}
});
}
else {
    var require = {
    "packages": [
        {
            "name": "async",
            "location": "jam/async",
            "main": "lib/async.js"
        }
    ],
    "shim": {}
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}