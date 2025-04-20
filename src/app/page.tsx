import { NextPage } from 'next'
import { Button } from '@/components/ui/button'

const Home: NextPage = () => {
  console.log
  return (
    <div className='text-center text-3xl space-y-5'>
      <h1>Learning Next.js authentication</h1>
      <Button>Sign up</Button>
    </div>
  )
}

export default Home
