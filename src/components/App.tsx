import { useMemo, useState } from "react"
import { allInstructions } from "../data/instructions"
import InstructionData from "./InstructionData"
import InstructionList from "./InstructionList"

export type Instruction = {
  id: number
  name: string
  command: string
  explanation: string
  where: string
  link?: string
}

function App() {
  const [query, setQuery] = useState<string>("")
  const [currentInstructionId, setCurrentInstructionId] = useState<number>(0)
  const [instructions] = useState<Array<Instruction>>(allInstructions)

  const filteredInstructions = useMemo(() => {
    return instructions.filter((instruction: Instruction) =>
      instruction.name.toLowerCase().includes(query.toLowerCase())
    )
  }, [instructions, query])

  function handleInputChange(evnt: React.ChangeEvent<HTMLInputElement>) {
    setQuery(evnt.target.value)
  }

  function clearInput() {
    console.log("clearInput")
    setQuery("")
  }

  return (
    <div className="container vt323-regular">
      <h1>Instructions</h1>
      <div className="input-container">
        <input
          type="text"
          className="vt323-regular"
          value={query}
          onChange={handleInputChange}
          placeholder="Type to search"
        />
        <button type="button" className="clear-btn" onClick={clearInput}>
          ✖
        </button>
      </div>

      {/* {filteredUsers.length === 0 ? (
          <p>No users found</p>
          ) : (
            <ItemList items={filteredUsers} />
            )} */}

      {currentInstructionId !== 0 ? (
        <InstructionData
          instruction={instructions[currentInstructionId - 1]}
          setCurrentInstructionId={setCurrentInstructionId}
        />
      ) : (
        <div className="search-result">
          <InstructionList
            instructions={filteredInstructions}
            query={query}
            setCurrentInstructionId={setCurrentInstructionId}
          />
        </div>
      )}
    </div>
  )
}

export default App
