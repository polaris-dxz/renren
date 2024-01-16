import Image from 'next/image'

export default () => {
  return (
    <div className="flex text-primary px-[10px] py-[3px] h-[21px] rounded-[12px] bg-[#e9f2ff]">
      <Image
        src="/location.svg"
        alt="location"
        width={8}
        height={10}
        priority
      />
      <div className="ml-[10px]">哈尔滨市南岗区</div>
    </div>
  )
}