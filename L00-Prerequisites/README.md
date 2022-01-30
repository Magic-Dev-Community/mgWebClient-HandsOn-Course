# mgWebClient-HandsOn-Course
## Lesson 0 - Pre-requisites

I'm not going to duplicate materials that exist on MSE's site for the course, but here is a list of installs and configuration actions required prior to beginning.

From: https://webclient.magicsoftware.com/ 
Navigate: Documents, Introduction, Quickstart<br/>
(The website ~~stupidly~~ doesn't allow deep-linking)

- Ensure IIS is installed and working
- Install Magic XPA v4.8
- Install Node.js v14.18.2
- Install Angular CLI
    ```
    npm install -g @angular/cli
    ```
- Install Visual Studio Code 
- Execute the following commands to install useful Visual Code Extensions
    ```
    code --install-extension Angular.ng-template
    code --install-extension christian-kohler.path-intellisense
    code --install-extension CoenraadS.bracket-pair-colorizer
    code --install-extension EditorConfig.EditorConfig
    code --install-extension eg2.tslint
    code --install-extension formulahendry.auto-close-tag
    code --install-extension formulahendry.auto-rename-tag
    code --install-extension johnpapa.angular-essentials
    code --install-extension johnpapa.Angular2
    code --install-extension johnpapa.winteriscoming
    code --install-extension jtlowe.vscode-icon-theme
    code --install-extension JuanBlanco.solidity
    code --install-extension msjsdiag.debugger-for-chrome
    code --install-extension natewallace.angular2-inline
    code --install-extension PKief.material-icon-theme
    code --install-extension robertohuertasm.vscode-icons
    code --install-extension vincaslt.highlight-matching-tag
    code --install-extension web-dave.vsc-angular-cli
    ```
## IIS Web Server Configuration for Local Development

A pre-flight check will be that you can create a simple one-field Hello, World application for first RIA and then Web Client as in the Quickstart video on MSE's site (Hello World Program Video). This proves the basic plumbing is working.

I also, well, because I love html-merge web apps, always want a similar proof-of-life test via the requester mgrqispi.dll for a Hello, World merge program. On Windows 10, I needed the following changes to IIS to allow this.

- Change line in C:\Windows\System32\inetsrv\config\applicationHost.config for "modules" to read overrideModeDefault="Allow"

   
    ```
    <configuration>
        <configSections>
            <sectionGroup name="system.webServer">
                <section name="modules" allowDefinition="MachineToApplication" overrideModeDefault="Allow" />
    ```

- Add Handler Mappings for MagicScripts to support requester:

    ```
    Add Script Map
       Request Path: mgrqispi.dll
       Executable: mgrqispi.dll  (located in appropriate version magic/scripts directory)
       Name: mgrqispi
       Request Restrictions/Access: Execute
    ``` 