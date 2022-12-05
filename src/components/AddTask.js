import { useState } from "react"

const AddTask = ({ onAdd }) => {

    const [text, setText] = useState ("");
    const [day, setDay] = useState ("");
    const [reminder, setReminder] = useState (false);

const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
        alert ("Please add a task")
        return
    }

    onAdd({text, day, reminder})
    setText ('')
    setDay ('')
    setReminder (false)
}


  return (
    <form className="add-form" 
        onSubmit = {onSubmit}  
    >

    <div className="form-control">
        <label>Item</label>
        <input 
            type="text" 
            placeholder="Add Item"
            value={text}
            onChange={(e) => setText(e.target.value)} 
            />
    </div>

    <div className="form-control">
        <label>Where</label>
        <input 
            type="text" 
            placeholder="Add the name of the place"
            value={day}
            onChange={(e) => setDay(e.target.value)} 
            />
    </div>

    <div className="form-control form-control-check">
        <label>Mark as Important</label>
        <input 
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)} 
            />
    </div>
    <input type="submit" value="Save Item" className="btn btn-block" />

    </form>
  )
}

export default AddTask