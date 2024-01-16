import Image from 'next/image'
import Nav from '@/components/nav'
import Time from '@/components/time'
import Social from '@/components/social'
import Address from '@/components/address'

export default () => {
  return (
    <main>
      <Nav />
      <div className="feed-list pt-[25px] w-[1010px] m-auto text-black">
        <div className="feed-list-item bg-[#fff] w-[495px] h-auto mb-[20px] px-[20px]">
          <Time />
          <a href="/">
            <div className="feed-list-content text-[#333]">
            #课程格子升级了#在这里你不仅可以轻松搞定课程安排，还可以随时随地自由讨论关心话题。使用课程格子，更多精彩的校园生活等你发现。不久你就能当上学霸，出任团支书，迎娶高富帅，走上人生巅峰路，想想还有
            </div>
            <div className="feed-list-scl h-[30px] text-[12px] mt-[15px]">
              <div className="float-left">
                <Address />
              </div>
              <div className="float-right">
                <Social />
              </div>
            </div>
          </a>
        </div>
        <div className="feed-list-item bg-[#fff] w-[495px] h-auto mb-[20px] px-[20px]">
          <div className="feed-list-time pt-[25px] h-[70px] leading-[20px]">
            <i className="text-[20px]">17</i>
            <div className="text-[12px] text-[#333]">2024/1</div>
          </div>
          <a href="/">
            <div className="feed-list-content text-[#333]">
            #课程格子升级了#在这里你不仅可以轻松搞定课程安排，还可以随时随地自由讨论关心话题。使用课程格子，更多精彩的校园生活等你发现。不久你就能当上学霸，出任团支书，迎娶高富帅，走上人生巅峰路，想想还有
            </div>
            <div className="feed-list-scl h-[30px] text-[12px] mt-[15px]">
              <div className="flex float-left text-primary px-[10px] py-[3px] h-[21px] rounded-[12px] bg-[#e9f2ff]">
                <Image
                  src="/location.svg"
                  alt="location"
                  width={8}
                  height={10}
                  priority
                />
                <div className="ml-[10px]">哈尔滨市南岗区</div>
              </div>
              <div className="flex float-right h-[15px] leading-[15px]">
                <div className="share flex">
                  <Image
                    src="/share.svg"
                    alt="share"
                    className="ml-[35px] mr-[15px]"
                    width={15}
                    height={15}
                    priority
                  />
                  <div>0</div>
                </div>
                <div className="comment flex">
                  <Image
                    src="/comment.svg"
                    alt="comment"
                    className="ml-[35px] mr-[15px]"
                    width={15}
                    height={15}
                    priority
                  />
                  <span>0</span>
                </div>
                <div className="like flex">
                  <Image
                    src="/like.svg"
                    alt="like"
                    className="ml-[35px] mr-[15px]"
                    width={15}
                    height={15}
                    priority
                  />
                  <span>0</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
