import { CONFIG } from '../Core/constants/config.js'
import { apiFetch } from './api.js'
import { dataService } from '../Core/services/dataService.js'

export const getTarjetas = () =>
  CONFIG.USE_API ? apiFetch('/api/cards') : dataService.getTarjetas()