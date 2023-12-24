import { Card, CardHeader, Image } from '@nextui-org/react';
import Link from 'next/link';

export default function TopCards() {
  return (
    <>
      <div className="grid gap-4 p-4 lg:grid-cols-5">
        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">312 Buku</p>
            <p className="w-[140px] text-sm text-gray-600 md:w-full md:text-base">
              Terdapat total 312 buku yang ada dalam BookVerse
            </p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+21%</span>
          </p>
        </div>

        <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">500 Member</p>
            <p className="w-[140px] text-sm text-gray-600 md:w-full md:text-base">
              Terdapat total 500 member yang ada dalam BookVerse
            </p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+68%</span>
          </p>
        </div>

        <div className="flex w-full justify-between rounded-lg border bg-white p-4">
          <div className="flex w-full flex-col pb-4">
            <p className="text-2xl font-bold">8 Pegawai</p>
            <p className="w-[140px] text-sm text-gray-600 md:w-full md:text-base">
              Terdapat 8 pegawai BookVerse
            </p>
          </div>
          <p className="flex items-center justify-center rounded-lg bg-green-200 p-2">
            <span className="text-lg text-green-700">+2%</span>
          </p>
        </div>
      </div>

      <div className="grid max-w-full grid-cols-12 grid-rows-2 gap-2 px-4">
        <Card className="col-span-12 h-[180px] sm:col-span-4 lg:h-[300px]">
          <Link href="/member">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">
                Member
              </p>
              <h4 className="text-large font-medium text-white">
                Klik disini untuk melihat halaman member
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/member-cover.jpg"
            />
          </Link>
        </Card>

        <Card className="col-span-12 h-[180px] sm:col-span-4 lg:h-[300px]">
          <Link href="/buku">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">
                Buku
              </p>
              <h4 className="text-large font-medium text-white">
                Klik disini untuk melihat halaman buku
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/buku-cover.jpg"
            />
          </Link>
        </Card>

        <Card className="col-span-12 h-[180px] sm:col-span-4 lg:h-[300px]">
          <Link href="/pegawai">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">
                Pegawai
              </p>
              <h4 className="text-large font-medium text-white">
                Klik disini untuk melihat halaman pegawai
              </h4>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/pegawai-cover.jpg"
            />
          </Link>
        </Card>

        <Card className="col-span-12 h-[300px] w-full sm:col-span-5">
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 h-full w-full object-cover"
            src="/home-cover4.jpg"
          />
        </Card>

        <Card className="col-span-12 h-[300px] w-full sm:col-span-7">
          <Link href="/user">
            <CardHeader className="absolute top-1 z-10 flex-col !items-start">
              <p className="text-tiny font-bold uppercase text-white/60">
                User
              </p>
              <h4 className="text-large font-medium text-white">
                Klik disini untuk melihat halaman user
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed
              alt="Card background"
              className="z-0 h-full w-full object-cover"
              src="/home-cover5.jpg"
            />
          </Link>
        </Card>
      </div>
    </>
  );
}
