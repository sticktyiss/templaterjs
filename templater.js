var template = document.getElementById("ourTemplate");
var templateText = template.textContent;
Templater(templateText);

Templater = templateText => {
  return new Function();
}