var $tabs = $('.tabs .tab');

$tabs.click(function(event) {
  var selectedClass = 'is-tab-selected';
  $tabs.removeClass(selectedClass);
  $(event.target).addClass(selectedClass);
});

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: { name: "gfm" },
  lineNumbers: true,
  theme: "default"
})

$(".preview-tab").click(function(event) {
  var html = markdownit().render(editor.getValue())
  $("#preview").html(html)

  $("#source").hide()
  $("#preview").show()
});

$(".source-tab").click(function(event) {
  $("#preview").hide()
  $("#source").show()
});
