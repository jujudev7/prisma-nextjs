import prisma from "@/lib/db";

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const character = await prisma.character.findUnique({
    where: { name },
  });

  if (!character) {
    return <div>Personnage non trouvé.</div>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold">{character.name}</h1>
      <ul>
        <li>Attaque : {character.attack}</li>
        <li>Défense : {character.defense}</li>
        <li>PV : {character.healthPoints}</li>
        <li>Expérience : {character.experience}</li>
      </ul>
    </div>
  );
}
