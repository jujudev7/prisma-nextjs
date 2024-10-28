import prisma from "@/lib/db";
import Link from "next/link";

export default async function CharactersPage() {
  const characters = await prisma.character.findMany();

  return (
    <div>
      Liste de mes personnages pour mon jeu
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}{" "}
            <Link href={`characters/character/${character.name}`}>
              Voir stats
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
