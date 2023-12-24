import { User, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="ml-4 mr-4 flex items-center justify-between rounded-b-lg border-[1px] bg-white p-4">
      <p className="text-sm md:text-base">
        You are in <span className="font-semibold">{pathname}</span> page
      </p>

      <User
        name="Putu Rangga"
        description={
          <Link href="https://instagram.com/puturangga21" size="sm" isExternal>
            @puturangga21
          </Link>
        }
        avatarProps={{
          src: 'https://avatars.githubusercontent.com/u/61723244?v=4',
        }}
      />
    </div>
  );
}
