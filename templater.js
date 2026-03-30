var template = document.getElementById("ourTemplate");
var templateText = template.textContent;
Templater(templateText);

Templater = templateText => {
  return new Function(
    "page",
    "var output=" + 
    JSON.stringify(templateText)
    .replace(/<%=(.+?)%>/g, '"+($1)+"')
    .replace(/<%(.+?)%>/g, '"; $1 output+="') + "; return output;"
  );
}