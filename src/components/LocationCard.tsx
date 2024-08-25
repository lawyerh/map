// Defines the types and names of props we are expecting
interface LocationCardProps {
  name: string;
  id: number;
  onSelect: (id: number) => void;
}

export default function LocationCard({ name, id,  onSelect }: LocationCardProps) {

  const handleClick = () => {
    onSelect(id)
  }
  return (
    <div className="card">
      <p className="card__destination">{name}</p>
      <button onClick={handleClick} className="card__button">GO</button>
    </div>
  );
}
