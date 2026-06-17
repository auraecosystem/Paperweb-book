const vscode = require("vscode");

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "paperweb.compile",
    function () {
      const terminal = vscode.window.createTerminal("Paperweb");
      terminal.sendText("paperweb build " + vscode.window.activeTextEditor.document.fileName);
      terminal.show();
    }
  );

  context.subscriptions.push(disposable);
}

module.exports = { activate };
