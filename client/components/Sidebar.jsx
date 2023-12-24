import { useRouter } from 'next/router';
import Link from 'next/link';

// Icons
import {
  HiOutlineBookOpen,
  HiOutlineUser,
  HiOutlineUsers,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';

const links = [
  // { path: '/', label: 'Home', icon: <HiOutlineCommandLine size={20} /> },
  { path: '/pegawai', label: 'Pegawai', icon: <HiOutlineUser size={20} /> },
  { path: '/member', label: 'Member', icon: <HiOutlineUsers size={20} /> },
  { path: '/buku', label: 'Buku', icon: <HiOutlineBookOpen size={20} /> },
  { path: '/user', label: 'User', icon: <HiOutlineSquares2X2 size={20} /> },
];

export default function Sidebar({ children }) {
  const { pathname } = useRouter();

  return (
    <div className="flex">
      <div className="fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4">
        <div className=" flex flex-col items-center">
          <Link href="/">
            <div className="inline-block rounded-lg bg-sky-600 p-3 text-white">
              <HiOutlineBookOpen size={20} />
            </div>
          </Link>

          <span className="w-full border-b-[1px] border-gray-200 p-2"></span>

          {links.map((link, index) => (
            <Link key={index} href={link.path}>
              <div
                className={`${
                  pathname.startsWith(link.path)
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100'
                } my-4 inline-block cursor-pointer rounded-lg p-3 transition-all hover:bg-sky-900 hover:text-white`}>
                {link.icon}
              </div>
            </Link>
          ))}

          {/* <Link href="/">
            <Tooltip
              content="Home"
              showArrow={true}
              placement="right">
              <div
                className={`${
                  pathname == '/' ? 'bg-sky-600 text-white' : 'bg-gray-100'
                }  hover:bg-sky-900 hover:text-white cursor-pointer my-4 p-3 rounded-lg inline-block transition-all`}>
                <HiOutlineCommandLine size={20} />
              </div>
            </Tooltip>
          </Link>

          <Link href="/member">
            <Tooltip
              content="Member"
              showArrow={true}
              placement="right">
              <div
                className={`${
                  pathname == '/member'
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100'
                }  hover:bg-sky-900 hover:text-white cursor-pointer my-4 p-3 rounded-lg inline-block transition-all`}>
                <HiOutlineUser size={20} />
              </div>
            </Tooltip>
          </Link>

          <Link href="/pegawai">
            <Tooltip
              content="Pegawai"
              showArrow={true}
              placement="right">
              <div
                className={`${
                  pathname == '/pegawai'
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100'
                }  hover:bg-sky-900 hover:text-white cursor-pointer my-4 p-3 rounded-lg inline-block transition-all`}>
                <HiOutlineUsers size={20} />
              </div>
            </Tooltip>
          </Link>

          <Link href="/buku">
            <Tooltip
              content="Buku"
              showArrow={true}
              placement="right">
              <div
                className={`${
                  pathname == '/buku' ? 'bg-sky-600 text-white' : 'bg-gray-100'
                }  hover:bg-sky-900 hover:text-white cursor-pointer my-4 p-3 rounded-lg inline-block transition-all`}>
                <HiOutlineBookOpen size={20} />
              </div>
            </Tooltip>
          </Link> */}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
}
