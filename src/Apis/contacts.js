import { CONFIG } from '../Core/constants/config.js'
import { apiFetch } from './api.js'
import { dataService } from '../Core/services/dataService.js'

export const getContacts = () =>
  CONFIG.USE_API ? apiFetch('/api/contacts') : dataService.getContacts()
