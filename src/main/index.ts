import view = require("ui/core/view");
import MainViewModel = require("./view-model");

export function pageLoaded(args) {
    var page = args.object;
    var viewModel = new MainViewModel();
    page.bindingContext = viewModel;
    var webView = view.getViewById(page, "web-view");
    webView.on("loadFinished", () => viewModel.loadFinished());
}