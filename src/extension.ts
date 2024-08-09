import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // Register a file system watcher to detect changes in the project directory
    const watcher = vscode.workspace.createFileSystemWatcher('**/devfile.yaml');
    watcher.onDidChange(handleDevfileChange);

    // Function to handle devfile changes
    function handleDevfileChange(uri: vscode.Uri) {
        // Check if devcontainer file already exists
        const devcontainerPath = uri.fsPath.replace('devfile.yaml', '.devcontainer/devcontainer.json');
        if (fs.existsSync(devcontainerPath)) {
            // Devcontainer file already exists, show a notification to sync changes
            vscode.window.showInformationMessage('Devcontainer file already exists. Sync changes?')
                .then((selection) => {
                    if (selection === 'Sync') {
                        syncChanges(uri.fsPath, devcontainerPath);
                    }
                });
        } else {
            // Devcontainer file does not exist, show a notification to create it
            vscode.window.showInformationMessage('Devcontainer file does not exist. Create it?')
                .then((selection) => {
                    if (selection === 'Create') {
                        createDevcontainer(uri.fsPath, devcontainerPath);
                    }
                });
        }
    }

    // Function to create devcontainer file
    function createDevcontainer(devfilePath: string, devcontainerPath: string) {
        // Read the devfile contents
        const devfileContents = fs.readFileSync(devfilePath, 'utf-8');

        // Create the devcontainer file with the same contents as the devfile
        fs.writeFileSync(devcontainerPath, devfileContents, 'utf-8');

        // Show a success message
        vscode.window.showInformationMessage('Devcontainer file created successfully.');
    }

    // Function to sync changes between devfile and devcontainer
    function syncChanges(devfilePath: string, devcontainerPath: string) {
        // Read the devfile contents
        const devfileContents = fs.readFileSync(devfilePath, 'utf-8');

        // Update the devcontainer file with the devfile contents
        fs.writeFileSync(devcontainerPath, devfileContents, 'utf-8');

        // Show a success message
        vscode.window.showInformationMessage('Changes synced successfully.');
    }
}

export function deactivate() {
    // Clean up resources
}