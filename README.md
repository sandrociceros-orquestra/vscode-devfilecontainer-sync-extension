# vscode-devfile-sync-extension

This is a Visual Studio Code extension that helps synchronize changes between a `devfile.yaml` and `devcontainer` file in a project.

## Project Structure

```
vscode-devfile-sync-extension
├── src
│   ├── extension.ts
│   └── utils
│       └── sync.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Files

- `src/extension.ts`: This file is the main entry point of the extension. It contains the logic for detecting the presence of a `devfile.yaml` file in the project and suggesting the option to create a `devcontainer` file with the same specifications.

- `src/utils/sync.ts`: This file exports a function `syncChanges` which handles the synchronization of changes between the `devfile.yaml` and `devcontainer` files. It detects if either file is modified and updates the other file accordingly.

- `tsconfig.json`: This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project.

- `README.md`: This file contains the documentation for the project.

## Usage

To use this extension, simply install it in your Visual Studio Code editor and open a project that contains a `devfile.yaml` file. The extension will automatically detect the presence of the file and suggest the option to create a `devcontainer` file with the same specifications. Any changes made to either file will be synchronized by the `syncChanges` function in the `src/utils/sync.ts` file.

For more information, please refer to the documentation in the `README.md` file.

```

Please note that this is a generated content and may require further modifications based on your specific requirements.