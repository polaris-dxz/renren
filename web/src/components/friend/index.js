import Image from 'next/image'

export default () => {
  return (
    <a href="/" className="block w-[237px] h-[298px] text-[#333] bg-[#fff] rounded-[4px]">
      <Image
        src="/d-avatar.png"
        alt="avatar"
        className="p-[15px] mx-auto"
        width={207}
        height={207}
        priority
      />
      <div className="name font-bold text-[14px] leading-[14px] text-center">王宝强</div>
      <div className="school text-[12px] leading-[12px] pt-[10px] text-center">清华大学</div>
    </a>
  )
}