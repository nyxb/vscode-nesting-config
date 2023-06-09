<br>

<p align="center">
<img src="https://raw.githubusercontent.com/nyxb/vscode-nesting-config/main/extension/res/logo.png" style="width:100px;" />
</p>

<h1 align="center">Nesting Config Updater</h1>

<p align="center">
Auto updater for <a href="https://github.com/nyxb/vscode-nesting-config" target="_blank"><code>vscode-nesting-config</code></a>.<br>
A config to make your file tree cleaner with the <a href="https://code.visualstudio.com/updates/v1_64#_explorer-file-nesting">file nesting feature</a> of VS Code.</a>
</p>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=nyxb.nesting-config" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/nyxb.nesting-config.svg?style=flat&colorA=18181B&colorB=14F195&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

![](https://raw.githubusercontent.com/nyxb/vscode-nesting-config/main/.github/assets/example.png)

## ⚙️ Configurations

```json
{
  "nestingConfigUpdater.autoUpdate": true,
  "nestingConfigUpdater.autoUpdateInterval": 720,
  "nestingConfigUpdater.promptOnAutoUpdate": true,
  "nestingConfigUpdater.upstreamRepo": "nyxb/vscode-nesting-config",
  "nestingConfigUpdater.upstreamBranch": "main"
}
```

It will check for update every 12 hours by default. You can also do it manually by executing command `Nesting Config Updater: Update config now`.

## 📜 License

[MIT](./LICENSE) - Made with 💙
