import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Harry Potter and the Philosopher\'s Stone',
    description: 'Harry Potter has no idea how famous he is. That\'s because he\'s being raised by his miserable aunt and uncle who are terrified Harry will learn that he\'s really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.'
  },
  {
    id: 'p2',
    price: 7,
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'The Dursleys were so mean that hideous that summer that all Harry Potter wanted was to get back to the Hogwarts School for Witchcraft and Wizardry. But just as he\'s packing his bags, Harry receives a warning from a strange, impish creature named Dobby who says that if Harry Potter returns to Hogwarts, disaster will strike.'
  },
  {
    id: 'p3',
    price: 8,
    title: 'Harry Potter and the Prisoner of Azkaban',
    description: 'When the Knight Bus crashes through the darkness and screeches to a halt in front of him, it\'s the start of another far from ordinary year at Hogwarts for Harry Potter. Sirius Black, escaped mass-murderer and follower of Lord Voldemort, is on the run - and they say he is coming after Harry. In his first ever Divination class, Professor Trelawney sees an omen of death in Harry\'s tea leaves . But perhaps most terrifying of all are the Dementors patrolling the school grounds, with their soul-sucking kiss.'
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Choose the magic</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product =>
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />)}
      </ul>
    </section>
  );
};

export default Products;
