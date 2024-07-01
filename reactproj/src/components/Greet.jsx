function Greet({ person }) {
  // const {name, message} = props;
  return (
    <div>
      <h1>
        {person.message} {person.name} {person.randNums}
      </h1>
    </div>
  );
}
export default Greet;
