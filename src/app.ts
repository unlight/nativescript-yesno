/// <reference path="references.d.ts" />
import application = require("application");
// application.mainModule = "./main/index";
application.mainModule = "./views/main";
application.cssFile = "./app.css";
application.start();
