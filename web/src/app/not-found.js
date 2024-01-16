import Image from 'next/image'
import Nav from '@/components/nav'

export default () => {
  return (
    <main>
      <Nav />
      <div className="not-found flex justify-center items-center flex-col text-[#666]">
        <Image
          src="/404.png"
          alt="404"
          // className="dark:invert"
          width={214}
          height={214}
          priority
        />
        
        <div>
          <h1 className="text-[#333] text-[45px] mt-[45px] mb-[60px]">您查看的页面不存在</h1>
          <p className="text-[14px]">这可能是因为</p>
          <div className='text-[18px]'>
            <div className="mb-[15px]">这可能是因为</div>
            <div className="mb-[15px]">您输入的地址有误</div>
            <div className="mb-[15px]">您没有足够的权限查看该内容</div>
            <div className="mb-[15px]">该内容已被删除</div>
          </div>
        </div>
      </div>
    </main>
  )
}