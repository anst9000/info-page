import { useEffect, useState } from "react"
import InstructionList from "./InstructionList"
import InstructionData from "./InstructionData"

export type Instruction = {
  id: number
  name: string
  explanation: string
  link?: string
}

const instructions: Array<Instruction> = [
  {
    id: 1,
    name: "John",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 2,
    name: "Emily",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 3,
    name: "Michael",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 4,
    name: "Sarah",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 5,
    name: "David",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 6,
    name: "Jessica",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 7,
    name: "Daniel",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 8,
    name: "Olivia",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 9,
    name: "Matthew",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
  {
    id: 10,
    name: "Sophia",
    explanation: "Do it this way",
    link: "http://www.dn.se",
  },
]

function App() {
  const [query, setQuery] = useState("")
  const [currentInstructionId, setCurrentInstructionId] = useState(0)
  const [filteredInstructions, setFilteredInstructions] = useState<
    Array<Instruction>
  >([])

  const handleInputChange = (evnt: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(evnt.target.value)
  }

  useEffect(() => {
    let filteredInstructions: Array<Instruction> = []

    if (query !== "") {
      filteredInstructions = instructions.filter((instruction) =>
        instruction.name.toLowerCase().includes(query.toLowerCase())
      )
    }

    setFilteredInstructions(filteredInstructions)
  }, [query])

  console.log("--> currentInstructionId", currentInstructionId)
  return (
    <div className="container vt323-regular">
      <input
        type="text"
        className="vt323-regular"
        value={query}
        onChange={handleInputChange}
        placeholder="Type to search"
      />

      <div className="search-result">
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
          <InstructionList
            instructions={filteredInstructions}
            query={query}
            setCurrentInstructionId={setCurrentInstructionId}
          />
        )}
      </div>
    </div>
  )
}

export default App
