import { useEffect, useState } from "react"
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

const instructions: Array<Instruction> = [
  {
    id: 1,
    name: "Tunnel till en miljö",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Om man bara kör kommandot 'tunnel' är default-värdet test (sadbtestblip1).",
    where: ".bash_functions",
  },
  {
    id: 2,
    name: "Emily",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 3,
    name: "Michael",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 4,
    name: "Sarah",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 5,
    name: "David",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 6,
    name: "Jessica",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 7,
    name: "Daniel",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 8,
    name: "Olivia",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 9,
    name: "Matthew",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
    link: "http://www.dn.se",
  },
  {
    id: 10,
    name: "Sophia",
    command: "tunnel [miljö]",
    explanation:
      "Kör kommando 'tunnel [miljö]' där det går att välja antingen test, int eller dev. Default-miljön om man bara kör kommandot 'tunnel' är test (sadbtestblip1).",
    where: ".bash_functions",
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

  function clearInput() {
    console.log("clearInput")
    setQuery("")
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
