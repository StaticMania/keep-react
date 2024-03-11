import Link from 'next/link'
import { ArrowLineUpRight } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Avatar } from '../src'

interface Contributor {
  login: string
  id: number
  avatar_url: string
}

const Community = () => {
  const [contributors, setContributors] = useState<Contributor[]>([])

  useEffect(() => {
    let ignore = false
    const getUser = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/StaticMania/keep-react/contributors?per_page=7')
        const result = await response.json()
        if (!ignore) {
          setContributors(result)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getUser()

    return () => {
      ignore = true
    }
  }, [])
  return (
    <section className="community py-20">
      <div className="mx-auto max-w-7xl px-6 py-6 2xl:px-0">
        <div className="mb-12 text-center">
          <h4 className="mb-1 text-body-1 font-semibold text-black lg:text-heading-5">Join The Community</h4>
          <p className="mx-auto max-w-sm text-body-4 font-normal text-metal-600 md:text-body-3">
            Become a member of a community of developers by supporting Keep React
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="community-1">
            <div className="flex items-center justify-center lg:justify-start lg:pl-14">
              <div className="my-20">
                <div>
                  {contributors?.length ? (
                    <Avatar.Group>
                      {contributors?.map((user) => (
                        <Avatar key={user?.id} shape="circle" size="lg" img={user?.avatar_url} />
                      ))}
                    </Avatar.Group>
                  ) : null}
                </div>
                <div className="mt-3">
                  <p className="text-heading-6 font-semibold text-white lg:text-heading-5">Join the community</p>
                  <p className="max-w-sm text-body-3 font-normal text-white/70">
                    Become a member of a community of developers by supporting Keep React
                  </p>
                </div>
                <Link
                  href="https://github.com/StaticMania/keep-react"
                  target="_blank"
                  className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/70 bg-[#f9fafb33] px-4 py-3.5 text-body-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5">
                  See Our Repository
                  <ArrowLineUpRight size={18} color="white" />
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/StaticMania/keep-react/discussions"
            target="_blank"
            className="community-2 group relative cursor-pointer">
            <div className="p-7 lg:px-6 lg:py-7">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
                  <circle
                    cx={22}
                    cy={22}
                    r="21.5"
                    fill="#F9FAFB"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_1549_6712)"
                  />
                  <path
                    d="M22 8C14.265 8 8 14.1941 8 21.8415C8 27.9663 12.0075 33.1396 17.5725 34.9736C18.2725 35.0947 18.535 34.6794 18.535 34.3161C18.535 33.9874 18.5175 32.8973 18.5175 31.7381C15 32.3783 14.09 30.8903 13.81 30.1117C13.6525 29.7138 12.97 28.4854 12.375 28.1566C11.885 27.8971 11.185 27.2569 12.3575 27.2396C13.46 27.2223 14.2475 28.2431 14.51 28.6584C15.77 30.7519 17.7825 30.1636 18.5875 29.8003C18.71 28.9006 19.0775 28.295 19.48 27.949C16.365 27.603 13.11 26.4092 13.11 21.1148C13.11 19.6095 13.6525 18.3638 14.545 17.3949C14.405 17.0489 13.915 15.6301 14.685 13.7269C14.685 13.7269 15.8575 13.3636 18.535 15.1457C19.655 14.8342 20.845 14.6785 22.035 14.6785C23.225 14.6785 24.415 14.8342 25.535 15.1457C28.2125 13.3463 29.385 13.7269 29.385 13.7269C30.155 15.6301 29.665 17.0489 29.525 17.3949C30.4175 18.3638 30.96 19.5922 30.96 21.1148C30.96 26.4265 27.6875 27.603 24.5725 27.949C25.08 28.3816 25.5175 29.212 25.5175 30.5097C25.5175 32.361 25.5 33.8489 25.5 34.3161C25.5 34.6794 25.7625 35.112 26.4625 34.9736C29.2418 34.0459 31.6568 32.28 33.3677 29.9242C35.0786 27.5685 35.9993 24.7416 36 21.8415C36 14.1941 29.735 8 22 8Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1549_6712"
                      x1="20.9339"
                      y1="2.10708e-08"
                      x2="20.9339"
                      y2="36.6667"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.7" />
                      <stop offset={1} stopColor="white" stopOpacity="0.07" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-5">
                <p className="mb-1 text-body-2 font-medium text-white">Github Discussion</p>
                <p className="text-body-3 font-normal text-white">
                  Request new features, ask questions and provide feedback with GitHub discussions
                </p>
              </div>
            </div>
            <button className="invisible absolute right-5 top-5 transition-all duration-300 group-hover:visible">
              <ArrowLineUpRight size={20} color="white" />
            </button>
          </Link>
          <Link
            href="https://twitter.com/heystaticmania"
            target="_blank"
            className="community-3 group relative cursor-pointer">
            <div className="p-7 lg:px-6 lg:py-7">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
                  <path
                    d="M43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5C33.8741 0.5 43.5 10.1259 43.5 22Z"
                    fill="#F9FAFB"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_1548_6698)"
                  />
                  <path
                    d="M12.0487 13L19.7704 22.928L12 31H13.749L20.5521 23.9327L26.0487 31H32L23.8436 20.5136L31.0764 13H29.3274L23.0623 19.5086L18 13H12.0487ZM14.6206 14.2387H17.3546L29.4278 29.7613H26.6937L14.6206 14.2387Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1548_6698"
                      x1="20.9339"
                      y1="2.10708e-08"
                      x2="20.9339"
                      y2="36.6667"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.7" />
                      <stop offset={1} stopColor="white" stopOpacity="0.07" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mt-5">
                <p className="mb-1 text-body-2 font-medium text-white">X Twitter</p>
                <p className="text-body-3 font-normal text-white/70 lg:max-w-[220px]">
                  Stay updated on all our latest minor and major releases
                </p>
              </div>
            </div>
            <button className="invisible absolute right-5 top-5 transition-all duration-300 group-hover:visible">
              <ArrowLineUpRight size={20} color="white" />
            </button>
          </Link>
          <Link
            target="_blank"
            href="https://discord.com/invite/fSxDJyvJmr"
            className="community-4 group relative cursor-pointer">
            <div className="flex flex-col items-start gap-4 p-7 lg:flex-row lg:px-6 lg:py-7">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} viewBox="0 0 44 44" fill="none">
                  <path
                    d="M43.5 22C43.5 33.8741 33.8741 43.5 22 43.5C10.1259 43.5 0.5 33.8741 0.5 22C0.5 10.1259 10.1259 0.5 22 0.5C33.8741 0.5 43.5 10.1259 43.5 22Z"
                    fill="#F9FAFB"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_1549_6730)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.1268 13.0096C18.0571 12.9988 17.9862 12.9971 17.916 13.0046C16.5653 13.1498 14.5135 13.8681 13.3021 14.5166C13.2186 14.5612 13.1439 14.6202 13.0814 14.6908C12.5757 15.2614 12.1189 16.1905 11.7614 17.0648C11.3936 17.9644 11.0889 18.9124 10.9152 19.5979C10.3503 21.8273 10.0401 24.5038 10.0001 27.0403C9.99801 27.1725 10.0296 27.303 10.0919 27.42C10.5777 28.3319 11.618 29.1741 12.6561 29.788C13.7064 30.409 14.9332 30.9016 15.9261 30.9964C16.1752 31.02 16.4212 30.9274 16.5909 30.7458C16.8401 30.4791 17.2611 29.8598 17.5774 29.382C17.7459 29.1275 17.9017 28.8867 18.0153 28.7097C18.0231 28.6977 18.0306 28.6859 18.038 28.6744C19.1136 28.9297 20.4266 29.1054 22.002 29.1054C23.5756 29.1054 24.8875 28.93 25.9625 28.6751C25.9697 28.6864 25.9771 28.6979 25.9846 28.7097C26.0981 28.8867 26.2541 29.1275 26.4226 29.382C26.7388 29.8598 27.1599 30.4791 27.4089 30.7458C27.5787 30.9274 27.8247 31.02 28.0738 30.9964C29.0667 30.9016 30.2935 30.409 31.3439 29.788C32.382 29.1741 33.4222 28.3319 33.9081 27.42C33.9703 27.303 34.002 27.1725 33.9999 27.0403C33.9598 24.5038 33.6497 21.8273 33.0847 19.5979C32.911 18.9124 32.6064 17.9644 32.2385 17.0648C31.8811 16.1905 31.4242 15.2614 30.9185 14.6908C30.856 14.6202 30.7813 14.5612 30.6978 14.5166C29.4865 13.8681 27.4347 13.1498 26.0839 13.0046C26.0137 12.9971 25.9429 12.9988 25.8731 13.0096C25.5356 13.0619 25.2465 13.2333 25.035 13.3909C24.8114 13.5576 24.6042 13.7625 24.4258 13.9692C24.1646 14.2718 23.9113 14.6415 23.7497 14.9921C23.2047 14.9306 22.6212 14.8947 22.0019 14.8947C21.3812 14.8947 20.7965 14.9308 20.2504 14.9925C20.0888 14.6418 19.8355 14.2719 19.5742 13.9692C19.3957 13.7625 19.1885 13.5576 18.9649 13.3909C18.7535 13.2333 18.4643 13.0619 18.1268 13.0096ZM27.5467 28.1906C27.614 28.294 27.6866 28.4048 27.7617 28.5184C27.9698 28.8327 28.175 29.1334 28.3357 29.3554C28.9624 29.2129 29.7572 28.8856 30.5217 28.4336C31.385 27.9229 32.0657 27.3384 32.3962 26.8445C32.3436 24.4709 32.0465 22.008 31.5328 19.981C31.3777 19.3685 31.0961 18.4898 30.7551 17.6558C30.4351 16.8734 30.0958 16.2137 29.8003 15.8341C28.7655 15.306 27.1419 14.7486 26.0804 14.5958C26.0594 14.6083 26.0324 14.6261 25.9993 14.6508C25.8927 14.7303 25.7688 14.848 25.6434 14.9933C25.5603 15.0896 25.4863 15.1862 25.4228 15.2776C26.0108 15.4133 26.5299 15.5722 26.9745 15.7317C27.5608 15.9422 28.018 16.1541 28.3333 16.3165C28.4911 16.3977 28.6135 16.4667 28.6993 16.517C28.742 16.5422 28.7757 16.5628 28.7999 16.5779L28.8293 16.5964L28.8386 16.6025L28.842 16.6046L28.8434 16.6055C28.8437 16.6057 28.8444 16.6062 28.4243 17.2283L28.8434 16.6055C29.2109 16.8474 29.3113 17.3383 29.0662 17.7011C28.8216 18.0631 28.3265 18.1615 27.9592 17.9214L27.9576 17.9204C27.9575 17.9202 27.957 17.92 28.4008 17.2631L27.9576 17.9204L27.9456 17.9129C27.9328 17.9049 27.9111 17.8915 27.8805 17.8735C27.8193 17.8375 27.7231 17.7831 27.5934 17.7164C27.3339 17.5827 26.9412 17.3999 26.4277 17.2156C25.4009 16.8471 23.8939 16.4737 22.0019 16.4737C20.1099 16.4737 18.6029 16.8471 17.5761 17.2156C17.0627 17.3999 16.67 17.5827 16.4105 17.7164C16.2808 17.7831 16.1846 17.8375 16.1234 17.8735C16.0928 17.8915 16.071 17.9049 16.0581 17.9129L16.0456 17.9208C16.0455 17.9209 16.0458 17.9207 16.0456 17.9208C15.6782 18.1619 15.1824 18.0635 14.9376 17.7011C14.6925 17.3383 14.7918 16.8481 15.1594 16.6063L15.6031 17.2631C15.1594 16.6063 15.1591 16.6064 15.1594 16.6063L15.1619 16.6046L15.1652 16.6025L15.1746 16.5964L15.2039 16.5779C15.2281 16.5628 15.2618 16.5422 15.3046 16.517C15.3903 16.4667 15.5128 16.3977 15.6705 16.3165C15.9859 16.1541 16.4431 15.9422 17.0294 15.7317C17.473 15.5725 17.991 15.414 18.5777 15.2784C18.514 15.1868 18.4399 15.0899 18.3566 14.9933C18.2311 14.848 18.1073 14.7303 18.0006 14.6508C17.9675 14.6261 17.9405 14.6083 17.9195 14.5958C16.858 14.7486 15.2344 15.306 14.1996 15.8341C13.9041 16.2137 13.5648 16.8734 13.2448 17.6558C12.9038 18.4898 12.6223 19.3685 12.4671 19.981C11.9535 22.008 11.6563 24.4709 11.6038 26.8445C11.9342 27.3384 12.6149 27.9229 13.4783 28.4336C14.2428 28.8856 15.0375 29.2129 15.6643 29.3554C15.8249 29.1334 16.0301 28.8327 16.2382 28.5184C16.3136 28.4044 16.3866 28.2932 16.4541 28.1893C16.3019 28.1309 16.1574 28.0717 16.0204 28.0121C15.3799 27.7335 14.9092 27.4508 14.5909 27.2299C14.4318 27.1197 14.311 27.025 14.2262 26.9541C14.1838 26.9187 14.1504 26.8892 14.1258 26.8668C14.1134 26.8556 14.1033 26.8461 14.0953 26.8385L14.0849 26.8286L14.0809 26.8248L14.0792 26.823C14.0788 26.8227 14.0777 26.8216 14.6433 26.2633L14.0777 26.8216C13.7654 26.5132 13.7654 26.0134 14.0777 25.7051C14.3884 25.3984 14.8912 25.3968 15.2039 25.7002L15.2101 25.706C15.2185 25.7136 15.235 25.7283 15.2598 25.749C15.3093 25.7904 15.3922 25.856 15.5106 25.9381C15.7472 26.1022 16.1263 26.3326 16.6655 26.5672C17.7412 27.0351 19.4708 27.5265 22.002 27.5265C24.5331 27.5265 26.2627 27.0351 27.3384 26.5672C27.8777 26.3326 28.2568 26.1022 28.4934 25.9381C28.6118 25.856 28.6946 25.7904 28.7442 25.749C28.769 25.7283 28.7855 25.7136 28.7938 25.706L28.8 25.7003C29.1128 25.3968 29.6154 25.3984 29.9262 25.7051C30.2385 26.0134 30.2385 26.5132 29.9262 26.8216L29.3686 26.2712C29.9262 26.8216 29.9267 26.8213 29.9262 26.8216L29.9246 26.823L29.923 26.8248L29.919 26.8286L29.9086 26.8385C29.9006 26.8461 29.8906 26.8556 29.8781 26.8668C29.8535 26.8892 29.8202 26.9187 29.7778 26.9541C29.693 27.025 29.5722 27.1197 29.4131 27.2299C29.0947 27.4508 28.6241 27.7335 27.9836 28.0121C27.8457 28.0721 27.7001 28.1318 27.5467 28.1906ZM16.5317 21.2298C16.9214 20.8155 17.4504 20.5815 18.0028 20.5789C18.5552 20.5815 19.0841 20.8155 19.4738 21.2298C19.8636 21.6441 20.0824 22.2048 20.0824 22.7894C20.0824 23.374 19.8636 23.9348 19.4738 24.349C19.0841 24.7633 18.5552 24.9973 18.0028 24.9999C17.4504 24.9973 16.9214 24.7633 16.5317 24.349C16.1419 23.9348 15.9231 23.374 15.9231 22.7894C15.9231 22.2048 16.1419 21.6441 16.5317 21.2298ZM25.9994 20.5789C25.447 20.5815 24.918 20.8155 24.5283 21.2298C24.1385 21.6441 23.9197 22.2048 23.9197 22.7894C23.9197 23.374 24.1385 23.9348 24.5283 24.349C24.918 24.7633 25.447 24.9973 25.9994 24.9999C26.5518 24.9973 27.0807 24.7633 27.4704 24.349C27.8602 23.9348 28.0791 23.374 28.0791 22.7894C28.0791 22.2048 27.8602 21.6441 27.4704 21.2298C27.0807 20.8155 26.5518 20.5815 25.9994 20.5789Z"
                    fill="white"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1549_6730"
                      x1="20.9339"
                      y1="2.10708e-08"
                      x2="20.9339"
                      y2="36.6667"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.7" />
                      <stop offset={1} stopColor="white" stopOpacity="0.07" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div>
                  <p className="mb-1 text-body-2 font-medium text-white">Discord Community</p>
                  <p className="max-w-md text-body-3 font-normal text-white/70">
                    Ask questions, share feedback, get updates, learn about upcoming features and more.
                  </p>
                </div>
              </div>
            </div>
            <button className="invisible absolute right-5 top-5 transition-all duration-300 group-hover:visible">
              <ArrowLineUpRight size={20} color="white" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Community
