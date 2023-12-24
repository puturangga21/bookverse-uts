import { kolomBuku, dataBuku } from '@/constant/data';
import { useCallback, useMemo, useState } from 'react';
import Header from '@/components/Header';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Input,
  Button,
  Image,
  Pagination,
  Link,
} from '@nextui-org/react';
import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
  HiOutlinePlus,
  HiOutlineMagnifyingGlass,
} from 'react-icons/hi2';

export default function BookPage() {
  // Kombinasi pada cell table
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'cover_buku':
        return (
          <Image
            radius="sm"
            width={50}
            height={40}
            alt="Book Cover"
            src={user.cover_buku}
          />
        );

      case 'aksi':
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <HiOutlineEye />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                <HiOutlinePencilSquare />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="cursor-pointer text-lg text-danger active:opacity-50">
                <HiOutlineTrash />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  // Top content dari table, berisi search bar dan button
  const topContent = useMemo(() => {
    return (
      <div className="flex justify-between">
        <Input
          isClearable
          className="w-[3/4] sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<HiOutlineMagnifyingGlass />}
        />

        <Button
          color="primary"
          endContent={<HiOutlinePlus />}
          href="/buku/input"
          as={Link}>
          Add New
        </Button>
      </div>
    );
  }, []);

  // Fungsi pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const pages = Math.ceil(dataBuku.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return dataBuku.slice(start, end);
  }, [page]);

  return (
    <section className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        <Table
          aria-label="Tabel buku"
          topContent={topContent}
          bottomContent={
            <div className="flex w-full justify-end">
              <Pagination
                isCompact
                showControls
                showShadow
                color="primary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }>
          <TableHeader columns={kolomBuku}>
            {(buku) => <TableColumn key={buku.key}>{buku.label}</TableColumn>}
          </TableHeader>

          <TableBody
            items={items}
            emptyContent={'Tidak ada data untuk ditampilkan'}>
            {(dataBuku) => (
              <TableRow key={dataBuku.key}>
                {(columnKey) => (
                  <TableCell>{renderCell(dataBuku, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
