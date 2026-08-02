import { CONFIG } from '../Core/constants/config.js'
import { apiFetch } from './api.js'
import { dataService } from '../Core/services/dataService.js'

export const getMetrics = () =>
  CONFIG.USE_API ? apiFetch('/api/metrics') : dataService.getMetrics()