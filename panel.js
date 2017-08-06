// CodeMirror
CodeMirror.keyMap.default["Shift-Tab"] = "indentLess";
CodeMirror.keyMap.default["Tab"]       = "indentMore";

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  mode: "markdown",
  extraKeys: {
      "Enter": "newlineAndIndentContinueMarkdownList"
  },

  lineWrapping: true,
  theme: "monokai"
})

// jQuery プレビューモード、編集モードの切り替え
var $tabs = $('.tabs .tab');

$tabs.click(function(event) {
  var selectedClass = 'is-tab-selected';
  $tabs.removeClass(selectedClass);
  $(event.target).addClass(selectedClass);
});


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
