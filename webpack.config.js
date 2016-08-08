module.exports = {
	entry: {
    "app": "./src/js/app.js",
    "popup": "./src/js/popup.js",
    "script": "./src/js/script.js"
  },
	output: {
		path: "./bin/js",
		filename: "[name].bundle.js"
	}
};
