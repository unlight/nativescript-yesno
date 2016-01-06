/// <reference path="references.d.ts" />
import application = require("application");
application.mainModule = "./main/index";
application.cssFile = "./app.css";
application.start();
