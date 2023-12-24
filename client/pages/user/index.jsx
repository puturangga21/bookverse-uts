import Header from '@/components/Header';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function MemberPage() {
  const list = [
    {
      title: 'The Cruel Prince',
      img: 'https://covers.openlibrary.org/b/id/8361789-M.jpg',
      price: '2018',
    },
    {
      title: 'Atomic Habits',
      img: 'https://covers.openlibrary.org/b/olid/OL27918581M-M.jpg',
      price: '2018',
    },
    {
      title: 'The Immortal Life of Henrietta Lacks',
      img: 'https://covers.openlibrary.org/b/olid/OL24523817M-M.jpg',
      price: '2009',
    },
    {
      title: 'Inside the Java virtual machine',
      img: 'https://covers.openlibrary.org/b/olid/OL694492M-M.jpg',
      price: '1998',
    },
    {
      title: 'Married at first sight',
      img: 'https://covers.openlibrary.org/b/id/14312142-M.jpg',
      price: '2015',
    },
    {
      title: 'Public relations',
      img: 'https://covers.openlibrary.org/b/id/13512100-M.jpg',
      price: '2004',
    },
    {
      title: 'Barn owl',
      img: 'https://covers.openlibrary.org/b/id/8281820-L.jpg',
      price: '1978',
    },
    {
      title: 'Snow Falling on Cedars',
      img: 'https://covers.openlibrary.org/w/id/13108904-M.jpg',
      price: '1994',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100">
      <Header />

      <div className="p-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card
              shadow="sm"
              key={index}
              isPressable
              onPress={() => console.log('item pressed')}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="h-[140px] w-full object-cover"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="justify-between text-small">
                <b className="text-sky-700">{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
