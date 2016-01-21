/// <reference path="../references.d.ts" />
import view = require("ui/core/view");
import MainViewModel = require("./view-model");
import {WebView} from "ui/web-view";
import {EventData} from "data/observable";

export function pageLoaded(args) {
    var page = args.object;
    var viewModel = new MainViewModel();
    page.bindingContext = viewModel;
    var webView = view.getViewById(page, "web-view");
    webView.on(WebView.loadFinishedEvent, function(event: EventData) {
    	viewModel.onLoadFinished();
	});
}