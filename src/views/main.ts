import 'reflect-metadata';
import {TextView} from 'ui/text-view';
import {topmost} from 'ui/frame';
import {nativeScriptBootstrap} from 'nativescript-angular/application';
import {Component} from 'angular2/core';


@Component({
	selector: 'main',
	template: `
<StackLayout orientation='vertical'>
    <Label [text]='message' class='title' (tap)='message = "OHAI"'></Label>
    <Button text="tap to details" cssClass="title" (tap)="itemTap($event)"></Button>
</StackLayout>
`,
})
class MainPage {
    public message: string = "Hello, Angular!";

  itemTap(args) {
    console.log('arguments.length ' , arguments.length);
    console.log(args.eventName);
    console.log(Object.keys(args.object));
    console.log(args.object.constructor);
    topmost().navigate({
        context: {id: 42},
        moduleName: "views/details"
    });
  }
}

export function pageLoaded(args) {
    var page = args.object;
    console.log('pageLoaded', args.object.constructor);
    page.bindingContext = "";

    console.log('BOOTSTRAPPING...');
    nativeScriptBootstrap(MainPage, []).then((appRef) => {
        console.log('ANGULAR BOOTSTRAP DONE.');
    }, (err) =>{
        console.log('ERROR BOOTSTRAPPING ANGULAR');
        let errorMessage = err.message + "\n\n" + err.stack;
        console.log(errorMessage);

        let view = new TextView();
        view.text = errorMessage;
        topmost().currentPage.content = view;
    });
}