import Header from '@/components/Header';
import { Input, Button, Link } from '@nextui-org/react';

export default function InputLayout() {
  return (
    <section className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        <div className="rounded-lg border-[1px] bg-white">
          <div className="flex flex-wrap gap-3 p-4 lg:flex-nowrap">
            <Input type="text" label="Nama" placeholder="Input nama member" />
            <Input
              type="text"
              label="Profil"
              placeholder="Input profil member (berupa link url)"
            />
          </div>

          <div className="flex flex-wrap gap-3 px-4 lg:flex-nowrap">
            <Input
              type="email"
              label="Email"
              placeholder="Input email member"
            />
            <Input
              type="text"
              label="Alamat"
              placeholder="Input alamat member"
            />
            <Input
              type="text"
              label="Telepon"
              placeholder="Input telepon member"
            />
          </div>

          <div className="flex flex-wrap gap-3 p-4 lg:flex-nowrap">
            <Input
              type="date"
              label="Tanggal Bergabung"
              placeholder="Input tanggal bergabung member"
            />
            <Input
              type="text"
              label="Status"
              placeholder="Input status member"
            />
          </div>

          <div className="flex justify-start gap-2 p-4 lg:justify-end">
            <Button color="warning" href="/member" as={Link}>
              Kembali
            </Button>
            <Button color="primary">Tambah Data</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
