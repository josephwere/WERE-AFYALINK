import { NextResponse } from 'next/server'
export async function GET(){
  const patients = [
    { id:1, name:'John Doe', age:34 },
    { id:2, name:'Jane Smith', age:28 },
    { id:3, name:'Ali Khan', age:45 }
  ]
  return NextResponse.json(patients)
}
