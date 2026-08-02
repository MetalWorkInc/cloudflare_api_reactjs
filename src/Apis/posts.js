import { CONFIG } from '../Core/constants/config.js'
import { apiFetch } from './api.js'
import { dataService } from '../Core/services/dataService.js'

export const getPosts = () =>
  CONFIG.USE_API ? apiFetch('/api/posts') : dataService.getPosts()

export const getPostById = (id) =>
  CONFIG.USE_API ? apiFetch(`/api/posts/${id}`) : dataService.getPostById(id)