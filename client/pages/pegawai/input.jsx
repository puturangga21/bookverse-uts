import Header from '@/components/Header';
import { Input, Button, Link } from '@nextui-org/react';

export default function InputLayout() {
  return (
    <section className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        <div className="rounded-lg border-[1px] bg-white">
          <div className="flex flex-wrap gap-3 p-4 lg:flex-nowrap">
            <Input type="text" label="Nama" placeholder="Input nama pegawai" />
            <Input
              type="email"
              label="Email"
              placeholder="Input email pegawai"
            />
            <Input
              type="text"
              label="Profil"
              placeholder="Input profil pegawai (berupa link url)"
            />
          </div>

          <div className="flex flex-wrap gap-3 px-4 lg:flex-nowrap">
            <Input
              type="text"
              label="Pekerjaan"
              placeholder="Input pekerjaan pegawai"
            />
            <Input
              type="text"
              label="Posisi"
              placeholder="Input posisi pegawai"
            />
          </div>

          <div className="flex justify-start gap-2 p-4 lg:justify-end">
            <Button color="warning" href="/pegawai" as={Link}>
              Kembali
            </Button>
            <Button color="primary">Tambah Data</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
