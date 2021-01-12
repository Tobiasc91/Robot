import './InputText.css'

export const InputTextGridSize = ({ labelText, inputs }) => (
  <label> {labelText} {
    inputs.map(i => (
      <input
        key={i.name}
        name={i.name}
        className="gridsize"
        type="number"
        value={i.current}
        onChange={e => i.handleChange(e.target.value)}
      />)
    )
  } </label>
)

export const InputTextStartPos = ({ labelText, inputs }) => (
  <label> {labelText} {
    inputs.map(i => (
      <input
        key={i.name}
        name={i.name}
        className="startpos"
        type="text"
        value={i.current}
        onChange={e => i.handleChange(e.target.value)}
      />)
    )
  } </label>
)

export const InputTextWalkDir = ({ labelText, inputs }) => (
  <label> {labelText} {
    inputs.map(i => (
      <input
        key={i.name}
        name={i.name}
        className="walkdir"
        type="text"
        value={i.current}
        onChange={e => i.handleChange(e.target.value)}
      />)
    )
  } </label>
)
