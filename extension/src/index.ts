import type { ExtensionContext } from 'vscode'
import { commands } from 'vscode'
import { getConfig } from './config'
import { fetchAndUpdate } from './fetch'

export async function activate(ctx: ExtensionContext) {
   commands.registerCommand('nyxb.nesting-config.manualUpdate', () => fetchAndUpdate(ctx, false))

   const lastUpdate = ctx.globalState.get('lastUpdate', 0)
   const initialized = ctx.globalState.get('init', false)
   const autoUpdateInterval = getConfig<number>('nestingConfigUpdater.autoUpdateInterval')

   if (!initialized) {
      ctx.globalState.update('init', true)
      fetchAndUpdate(ctx, false)
   }

   if (getConfig('nestingConfigUpdater.autoUpdate')) {
      if (Date.now() - lastUpdate >= autoUpdateInterval! * 60_000)
         fetchAndUpdate(ctx, getConfig('nestingConfigUpdater.promptOnAutoUpdate'))
   }
}

export function deactivate() {}
