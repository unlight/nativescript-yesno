var merge, glob, concat, write, env, pipeline, debounce;
var ts, put, copy;

var tsOptions = {
    "target": "es5",
    "module": "commonjs",
};

var globOptions = {
    basePath: "src"
};

module.exports = function (pipelines) {

	pipelines["copy"] = [
		glob(globOptions, "**/*.png"),
		copy("app", {prefix: 1})
	];

    pipelines["source"] = [
        merge(
            [glob(globOptions, "**/!(*.d).ts"), ts()],
            glob(globOptions, "**/*.{xml,css,json,html}")
        ),
		write({noSourceMaps: true}, "app")
    ];
};