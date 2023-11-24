import { workspace } from 'vscode'

export function getConfig<T = any>(key: string, defaultValue: T): T {
   const value = workspace.getConfiguration().get<T>(key)
   return value !== undefined ? value : defaultValue
}

export async function setConfig(key: string, value: any, isGlobal = true) {
   // update value
   return await workspace.getConfiguration().update(key, value, isGlobal)
}
