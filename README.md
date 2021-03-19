# vscode-extension-ci
VS Code Textbook Part3 - Sample Continuous Integration (CI) Repository for VS Code extension

| CI | Status Badge |
|--- | --- |
| GitHub Actions | [![GitHub Actions](https://github.com/vscode-textbook/vscode-extension-ci/workflows/VS%20Code%20extension%20CI/badge.svg)](https://github.com/vscode-textbook/vscode-extension-ci/actions) |

## GitHub Actions Workflow
[.github/workflows/vscode.yml](.github/workflows/vscode.yml)
```yml
name: VS Code extension CI

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ${{ matrix.os }}

    strategy:
      max-parallel: 3
      matrix:
        os: [macos-latest, windows-latest, ubuntu-latest]
        node-version: [8.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies
      run: npm install

    - name: Start xvfb only if it's Linux
      if: startsWith(matrix.os,'ubuntu')
      run: |
        /usr/bin/Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
        echo ">>> Started xvfb"
      shell: bash
    - name: npm install, build, and test
      run: |
        npm test
      env:
        DISPLAY: ':99.0' # Only necessary for linux tests
```

## Other CI tools
You can setup CI for VS Code extension with other CI tools very easily. Here is a sample CI configuration in Azure Pipelines:
- [azure-pipelines.yml](azure-pipelines.yml)

