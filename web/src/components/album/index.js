import Image from 'next/image'

export default () => {
  return (
    <a href="/" className="block w-[493px] h-[477px] text-[#333] bg-[#fff] rounded-[4px] p-[20px]">
      {/* <Image
        src="/d-avatar.png"
        alt="avatar"
        className="p-[15px] mx-auto"
        width={207}
        height={207}
        priority
      /> */}
      <div className="relative w-[453px] h-[304px] text-[#333] bg-[#f00]">
        <div className="size absolute top-[35px] right-[35px] text-[12px] leading-[12px] text-[#fff] bg-[rgba(51,51,51,.8)] h-[22px] rounded-[4px] px-[15px] py-[5px]">8 张</div>
      </div>
      <div className="name text-[16px] leading-[16px] pt-[20px] font-bold ">日志相册</div>
      <div className="type text-[12px] leading-[12px] pt-[15px] text-[#999]">好友相册</div>
    </a>
  )
}