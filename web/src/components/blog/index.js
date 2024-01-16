import Image from 'next/image'
import Time from '@/components/time'
import Social from '@/components/social'

export default () => {
  return (
    <div className="bg-[#fff] w-[495px] h-auto px-[20px]">
      <Time />
      <a href="/" className="block relative w-[455px] h-[160px] text-[#333] bg-[#f8f8f9]">
        <Image
          src="/log.png"
          alt="log"
          className=""
          width={160}
          height={160}
          priority
        />
        <span className="absolute top-[20px] left-[180px] text-[18px] text-[#333]">1111</span>
        <button className="absolute bottom-[15px] right-[20px] w-[52px] h-[26px] rounded-[2px] border-[#999] border border-solid text-[14px] text-[#666]">日志</button>
      </a>
      <div className="h-[30px] text-[12px] mt-[15px]">
        <div className='float-right'>
          <Social />
        </div>
      </div>
    </div>
  )
}