import Image from 'next/image'
export default () => {
  return (
    <div className="flex h-[15px] leading-[15px]">
      <button className="share flex cursor-pointer" title='编组'>
        <Image
          src="/share.svg"
          alt="share"
          className="ml-[35px] mr-[15px]"
          width={15}
          height={15}
          priority
        />
        <div>0</div>
      </button>
      <button className="comment flex cursor-pointer" title='评论'>
        <Image
          src="/comment.svg"
          alt="comment"
          className="ml-[35px] mr-[15px]"
          width={15}
          height={15}
          priority
        />
        <span>0</span>
      </button>
      <button className="like flex cursor-pointer" title='赞'>
        <Image
          src="/like.svg"
          alt="like"
          className="ml-[35px] mr-[15px]"
          width={15}
          height={15}
          priority
        />
        <span>0</span>
      </button>
    </div>
  )
}