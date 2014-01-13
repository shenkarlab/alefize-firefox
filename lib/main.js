var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*.wikipedia.org",
  contentScriptFile: [
    data.url('jquery-2.0.3.min.js'),
    data.url('alefize.js')
  ],
  contentStyleFile: data.url('alefize.css')
});
