import observable = require("data/observable");
import http = require("http");
const format = require("formatstring");

class MainViewModel extends observable.Observable {

	isVisible = false;
	framePattern = "<body style='padding:0;margin:0'><img src='{image}' style='width:100%;padding:0;margin:0' />";
	answer;
	isLoading;
	
	onLoadFinished() {
		this.set("isLoading", false);
	}

	onTap() {
		if (!this.isVisible) {
			this.set("isVisible", true);
		}
		this.set("isLoading", true);
		this.update();
	}
	
	update() {
		return http.getJSON("http://yesno.wtf/api")
			.then(data => {
				this.set("webViewSrc", format(this.framePattern, data));
				this.set("answer", data.answer.toUpperCase());
			});        
	}
}

export = MainViewModel;