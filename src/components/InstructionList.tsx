import { Instruction } from "./App"

type InstructionListProps = {
  instructions: Array<Instruction>
  query: string
  setCurrentInstructionId: React.Dispatch<React.SetStateAction<number>>
}

const InstructionList = ({
  instructions,
  query,
  setCurrentInstructionId,
}: InstructionListProps) => {
  return (
    <>
      {/* replace filteredInstructions with instructions*/}
      {query !== "" && instructions.length === 0 ? (
        <p>No instructions found</p>
      ) : (
        <ul>
          {instructions.map((instruction) => (
            <li
              key={instruction.id}
              onClick={() => setCurrentInstructionId(instruction.id)}
            >
              {instruction.name}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default InstructionList
