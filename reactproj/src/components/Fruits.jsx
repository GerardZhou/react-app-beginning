export default function Fruits() {
  const fruits = ["Apple", "Watermelon", "Peach", "Cherry"];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}
