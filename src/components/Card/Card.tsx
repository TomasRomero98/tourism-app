export interface CardProps {
  name: string;
  date: string;
  activities: string;
}

export const Card = ({ name, date, activities }: CardProps) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{activities}</p>
    </article>
  );
};
