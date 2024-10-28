import { createCharacter } from "@/actions/actions";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function CharactersPage() {
  const characters = await prisma.character.findMany();

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Liste de mes personnages pour mon jeu
      </h1>

      <ul className="mb-4">
        {characters.map((character) => (
          <li key={character.id}>
            <span className="mr-6">{character.name}</span>
            <Link href={`characters/character/${character.name}`}>
              Voir stats
            </Link>
          </li>
        ))}
      </ul>
      <form action={createCharacter} className="bg-gray-100 p-5">
        <input
          type="text"
          name="name"
          placeholder="nom"
          className="px-2 py-1 rounded-sm "
        />
        <button type="submit" className="px-2 py-1 rounded-sm bg-sky-500">
          Créer Personnage
        </button>
      </form>
    </div>
  );
}
