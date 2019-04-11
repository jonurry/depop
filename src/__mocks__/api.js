export default class API {
  async getProducts() {
    return await [
      {
        id: 1,
        img: 'https://picsum.photos/500/?image=0',
        title: 'Polo Shirt',
        description:
          'Vintage Polo by Ralph Lauren navy blue jumper/sweater Size XL',
        price: 21,
        brand: 'Ralph Lauren',
        size: 'XL',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user1',
        sold: true
      },
      {
        id: 2,
        img: 'https://picsum.photos/500/?image=10',
        title: 'Denim Shirt',
        description:
          'Some more funky vintage pieces! Message for any info. Lots of Funky pattern shirts. Size medium/large.. Look great buttoned up or worn open over a plain T-shirt ',
        price: 17.99,
        size: 'M',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user2',
        sold: false
      },
      {
        id: 3,
        img: 'https://picsum.photos/500/?image=20',
        title: 'Vintage Blouse',
        description: 'Hand embroidered airy vintage blouse',
        price: 24,
        brand: 'Slow',
        size: 'M',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user3',
        sold: false
      },
      {
        id: 4,
        img: 'https://picsum.photos/500/?image=30',
        title: 'Vintage Kettle',
        description:
          'Lorem ipsum dolor sit amet est pede aliquam semper suscipit nibh nonummy. Nullam id velit. Erat eu urna. Consectetuer penatibus porta. Quam morbi nec sem explicabo nulla sed ut pulvinar. Lorem in eu. Pharetra lacinia curabitur sit dolor elit aliquam con wisi. Ut quis consectetuer. Feugiat viverra nullam amet urna.',
        price: 14,
        brand: 'Philips',
        size: 'M',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user4',
        sold: false
      },
      {
        id: 5,
        img: 'https://picsum.photos/500/?image=40',
        title: 'Supreme Tshirt',
        description:
          'Lorem ipsum dolor sit amet est pede aliquam semper suscipit nibh nonummy. Nullam id velit. Erat eu urna. Consectetuer penatibus porta. Quam morbi nec sem explicabo nulla sed ut pulvinar. Lorem in eu. Pharetra lacinia curabitur sit dolor elit aliquam con wisi. Ut quis consectetuer. Feugiat viverra nullam amet urna.',
        price: 14,
        brand: 'Supreme',
        size: 'M',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user5',
        sold: true
      },
      {
        id: 6,
        img: 'https://picsum.photos/500/?image=50',
        title: 'Nike Tracksuit Bottoms',
        description:
          'Lorem ipsum dolor sit amet est pede aliquam semper suscipit nibh nonummy. Nullam id velit. Erat eu urna. Consectetuer penatibus porta. Quam morbi nec sem explicabo nulla sed ut pulvinar. Lorem in eu. Pharetra lacinia curabitur sit dolor elit aliquam con wisi. Ut quis consectetuer. Feugiat viverra nullam amet urna.',
        price: 60,
        brand: 'Nike',
        size: 'XL',
        date: '2019-03-03T18:29:50.588Z',
        seller: '@user5',
        sold: true
      }
    ];
  }
}
