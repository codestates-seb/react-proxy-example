const CreateTodo = ({ handleTodoOnChangeForm, handleTodoSubmit }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>todo</label>
                        <input 
                            type="text" 
                            onChange={(e) => handleTodoOnChangeForm(e)} 
                            name="todo" 
                            placeholder="todo" 
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => handleTodoOnChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>check complete</label>
                        <input type="radio"
                               value = "true"
                               name="complete" 
                               onChange={(e) => handleTodoOnChangeForm(e)} 
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleTodoSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateTodo;