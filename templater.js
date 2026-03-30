var template = document.getElementById('ourTemplate');
var templateText = template.textContent;
var render = Templater(templateText);
function Templater(templateText) {
  return new Function(
    "page",
    "var output=" +
    JSON.stringify(templateText)
    .replace(/<%=(.+?)%>/g, '"+($1)+"')
    .replace(/<%(.+?)%>/g, '";$1\noutput+="') +
    ";return output;"
  );
}
var Page = {
title: "Home",
links: ['Google','CSS-Tricks','Codrops']
}
document.body.innerHTML = render(Page);