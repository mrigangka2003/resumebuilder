import { SignUp } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <main className='flex h-screen items-center justify-center p-3'>
        <SignUp/>
    </main>
  )
}

export default page