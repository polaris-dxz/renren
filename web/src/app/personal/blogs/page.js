import Nav from '@/components/nav'
import Blog from '@/components/blog'

export default () => {
  return (
    <main>
      <Nav />
      <div className="pt-[25px] w-[1010px] m-auto text-black">
        <Blog />
      </div>
    </main>
  )
}