import { kolomMember, dataMember } from '@/constant/data';
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
  User,
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

export default function MemberPage() {
  // Kombinasi pada cell table
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case 'nama':
        return (
          <User
            avatarProps={{
              radius: 'full',
              size: 'sm',
              src: user.profil,
            }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user.email}
            name={cellValue}>
            {user.email}
          </User>
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
          href="/member/input"
          as={Link}>
          Add New
        </Button>
      </div>
    );
  }, []);

  // Fungsi pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 7;

  const pages = Math.ceil(dataMember.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return dataMember.slice(start, end);
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
          <TableHeader columns={kolomMember}>
            {(member) => (
              <TableColumn key={member.key}>{member.label}</TableColumn>
            )}
          </TableHeader>

          <TableBody
            items={items}
            emptyContent={'Tidak ada data untuk ditampilkan'}>
            {(item) => (
              <TableRow key={item.key}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
