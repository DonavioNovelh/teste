import React from 'react'

const AdicionarTarefa = () => {
  return (
    <div>
      <h1>Create Task</h1>
      <div className="form">
        <div className="filho">
          <label htmlFor="">task Name</label>
          <input type="text" name="" id="" />
        </div>

        <div className="filho">
          <label htmlFor="">End Date</label>
          <input type="text" name="" id="" />
        </div>

        <div className="filho">
          <label htmlFor="">Priority</label>
          <input placeholder='sahghgsa' type="text" name="" id="" />
        </div>

        <div className="filho">
          <label htmlFor="">Descriptio</label>
          <textarea placeholder='Descrever' name="" id=""></textarea>
        </div>
      </div>
      <button>Save</button>
    </div>
  );
}

export default AdicionarTarefa
