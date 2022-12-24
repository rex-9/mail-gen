import { icons } from "../../assets/assets"

const Operations = () => {
  return (
    <div className="flex justify-end pr-8 mt-2 mb-4">
      <button>
        <img src={icons.undo} alt="Undo Icon" />
      </button>
      <button>
        <img src={icons.refresh} alt="Refresh Icon" />
      </button>
      <button>
        <img src={icons.redo} alt="Redo Icon" />
      </button>
    </div>
  )
}

export default Operations;