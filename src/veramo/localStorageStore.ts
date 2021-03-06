import {
  DiffCallback,
  VeramoJsonCache,
  ClaimTableEntry,
  CredentialTableEntry,
  PresentationTableEntry,
  VeramoJsonStore,
} from '@veramo/data-store-json'

import { IIdentifier, IMessage, ManagedKeyInfo } from '@veramo/core'
import { ManagedPrivateKey } from '@veramo/key-manager'

export class LocalStorageStore implements VeramoJsonStore {
  notifyUpdate: DiffCallback
  dids: Record<string, IIdentifier>
  keys: Record<string, ManagedKeyInfo>
  privateKeys: Record<string, ManagedPrivateKey>
  credentials: Record<string, CredentialTableEntry>
  claims: Record<string, ClaimTableEntry>
  presentations: Record<string, PresentationTableEntry>
  messages: Record<string, IMessage>

  private constructor(private localStorageKey: string) {
    this.notifyUpdate = async (oldState: VeramoJsonCache, newState: VeramoJsonCache) => {
      this.save(newState)
    }
    this.dids = {}
    this.keys = {}
    this.privateKeys = {}
    this.credentials = {}
    this.claims = {}
    this.presentations = {}
    this.messages = {}
  }

  public static fromLocalStorage(localStorageKey: string): LocalStorageStore {
    const store = new LocalStorageStore(localStorageKey)
    return store.load()
  }

  private load(): LocalStorageStore {

    const rawCache = localStorage.getItem(this.localStorageKey)
    let cache: VeramoJsonCache
    try {
      cache = JSON.parse(rawCache)
    } catch (e: any) {
      cache = {}
    }
    ;({
      dids: this.dids,
      keys: this.keys,
      credentials: this.credentials,
      claims: this.claims,
      presentations: this.presentations,
      messages: this.messages,
      privateKeys: this.privateKeys,
    } = {
      dids: {},
      keys: {},
      credentials: {},
      claims: {},
      presentations: {},
      messages: {},
      privateKeys: {},
      ...cache,
    })
    return this
  }

  private save(newState: VeramoJsonCache): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(newState))
  }

  // public toJSON() {
  //   return {a: 'b'}
  // }
}