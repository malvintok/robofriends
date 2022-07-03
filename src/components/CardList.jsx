import Card from "./Card";

const CardList = ({ robots }) => {
  // throw new Error('test boundary'); // For testing error boundary
  return (
    <div>
      {robots.map((user) => {
        return (
          <Card
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
