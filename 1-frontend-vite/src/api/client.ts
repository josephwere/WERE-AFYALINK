import { mockApi } from './mockApi'
export async function getPatients(){ 
  try{
    const API = import.meta.env.VITE_API_URL || ''
    if(!API) throw new Error('no api')
    const res = await fetch(API+'/patients')
    if(res.ok) return res.json()
    return mockApi.getPatients()
  }catch(e){ return mockApi.getPatients() }
}
