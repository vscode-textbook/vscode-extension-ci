import * as vscode from 'vscode';
import {Funcs} from "./functions";

const COMMAND_DEFINITIONS=[
  { name: 'command1', desc: 'Sample Tests - Command1', handler: Funcs.command1() },
  { name: 'command2', desc: 'Sample Tests - Command2', handler: Funcs.command2() },
  { name: 'command3', desc: 'Sample Tests - Command3', handler: Funcs.command3() },
  { name: 'command4', desc: 'Sample Tests - Command4', handler: Funcs.command4() },
  { name: 'command5', desc: 'Sample Tests - Command5', handler: Funcs.command5() },
];

function runCommand(name: string): void {
  const command = COMMAND_DEFINITIONS.filter(c => c.name === name)[0];
  vscode.window.showInformationMessage(`Run ${name} result => ${command.handler}`);
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('sampletests.command1',()=>{runCommand("command1");}),
    vscode.commands.registerCommand('sampletests.command2',()=>{runCommand("command2");}),
    vscode.commands.registerCommand('sampletests.command3',()=>{runCommand("command3");}),
    vscode.commands.registerCommand('sampletests.command4',()=>{runCommand("command4");}),
    vscode.commands.registerCommand('sampletests.command5',()=>{runCommand("command5");}),
  );
}

export function deactivate() {}