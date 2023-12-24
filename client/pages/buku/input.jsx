import Header from "@/components/Header";
import { Input, Button, Link } from "@nextui-org/react";

export default function InputLayout() {
  return (
    <section className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        <div className="rounded-lg border-[1px] bg-white">
          <div className="flex flex-wrap gap-3 p-4 lg:flex-nowrap">
            <Input
              type="text"
              label="Judul Buku"
              placeholder="Input judul buku"
            />
            <Input
              type="text"
              label="Cover Buku"
              placeholder="Input cover buku (berupa link url)"
            />
          </div>

          <div className="flex flex-wrap gap-3 px-4 lg:flex-nowrap">
            <Input
              type="text"
              label="Penulis Buku"
              placeholder="Input penulis buku"
            />
            <Input
              type="text"
              label="Bahasa Buku"
              placeholder="Input bahasa buku"
            />
            <Input
              type="text"
              label="Penerbit Buku"
              placeholder="Input penerbit buku"
            />
          </div>

          <div className="flex flex-wrap gap-3 p-4 lg:flex-nowrap">
            <Input
              type="text"
              label="Tahun Terbit"
              placeholder="Input tahun terbit buku"
            />
            <Input
              type="text"
              label="Jumlah Halaman"
              placeholder="Input jumlah halaman buku"
            />
          </div>

          <div className="flex justify-start gap-2 p-4 lg:justify-end">
            <Button color="warning" href="/buku" as={Link}>
              Kembali
            </Button>
            <Button color="primary">Tambah Data</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
