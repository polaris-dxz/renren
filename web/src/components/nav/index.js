import Image from 'next/image'

export default function Nav() {
  return (
    <nav className=" bg-primary">
      <div className="flex justify-between items-center w-[1010px] h-[52px] m-auto">
        <a href="/" className="logo">
          <Image
            src="/logo@3x.png"
            alt="ren ren"
            // className="dark:invert"
            width={51}
            height={34}
            priority
          />
        </a>
        <ul className="flex text-[16px]">
          <li className="mr-[80px]"><a href="/personal">我的主页</a></li>
          <li className="mr-[80px]"><a href="/personal/blogs">我的日志</a></li>
          <li className="mr-[80px]"><a href="/personal/albums">我的相册</a></li>
          <li className="mr-[80px]"><a href="/personal/board">我的留言板</a></li>
          <li className="mr-[80px]"><a href="/personal/friends">好友</a></li>
          <li className="mr-[80px]"><a href="/personal/follow">关注</a></li>
        </ul>
        <a href="/personal" className="logo">
          <Image
            src="/d-avatar.png"
            alt="profile"
            // className="dark:invert"
            width={36}
            height={36}
            priority
          />
        </a>
      </div>
    </nav>
  )
}