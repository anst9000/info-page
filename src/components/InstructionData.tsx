import { Instruction } from "./App"

type InstructionDataProps = {
  instruction: Instruction
  setCurrentInstructionId: React.Dispatch<React.SetStateAction<number>>
}

const InstructionData = ({
  instruction,
  setCurrentInstructionId,
}: InstructionDataProps) => {
  return (
    <div className="instruction">
      <h2 className="instruction-header">{instruction.name}</h2>
      <div className="instruction-body">
        <p>{instruction.explanation}</p>
      </div>
      <div className="instruction-footer">
        <a href={instruction.link}>{instruction.link}</a>
        <button
          type="button"
          className="button instruction-close"
          onClick={() => setCurrentInstructionId(0)}
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default InstructionData
