import Image from 'next/image'
import Nav from '@/components/nav'
import Album from '@/components/album'

export default () => {
  return (
    <main>
      <Nav />
      <div className="pt-[25px] w-[1010px] m-auto text-black ">
        <h1 className="text-[20px] leading-[20px] text-[#333] font-bold pt-[20px]">
          <Image
            src="/albumIcon.png"
            alt="albumIcon"
            className="inline align-bottom mr-[10px]"
            width={20}
            height={20}
            priority
          />
          相册
        </h1>
        <div className="mt-[35px]">
          <Album></Album>
        </div>
      </div>
    </main>
  )
}