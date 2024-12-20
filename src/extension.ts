// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

// TODO: Indicators
/*
	When settings are updated, update the indicator objects.
	When we want to render, we use the cached indicator objects rather than
	sending a new query to the settings.
*/

export function activate(context: vscode.ExtensionContext) {
	console.log("Character limit indicators extension is now running!");
}

// This method is called when your extension is deactivated
export function deactivate() {}
