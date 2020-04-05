import * as assert from 'assert';
import { before } from 'mocha';

import * as vscode from 'vscode';
import {Funcs} from '../../functions';

suite('SampleTests Extension Test Suite', () => {
  before(() => {
    vscode.window.showInformationMessage('Start all tests.');
  });

  test('Command1 test', () => {
    assert.equal('Hello Command1', Funcs.command1());
  });
  test('Command2 test', () => {
    assert.equal('Hello Command2', Funcs.command2());
  });
  test('Command3 test', () => {
    assert.equal('Hello Command3', Funcs.command3());
  });
  test('Command4 test', () => {
    assert.equal('Hello Command4', Funcs.command4());
  });
  test('Command5 test', () => {
    assert.equal('Hello Command5', Funcs.command5());
  });
});
