import Nav from '@/components/nav'
import Friend from '@/components/friend'

export default () => {
  return (
    <main>
      <Nav />
      <div className="pt-[25px] w-[1010px] m-auto text-black">
        <Friend/>
      </div>
    </main>
  )
}