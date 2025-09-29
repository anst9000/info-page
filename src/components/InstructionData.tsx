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
        <div className="instruction-body-partial">
          <span>Command</span>
          <div>{instruction.command}</div>
        </div>
        <div className="instruction-body-partial">
          <span>How to</span>
          <div>{instruction.explanation}</div>
        </div>
        <div className="instruction-body-partial">
          <span>Where</span>
          <div>{instruction.where}</div>
        </div>
      </div>
      <div className="instruction-footer">
        {instruction.link && <a href={instruction.link}>{instruction.link}</a>}
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
