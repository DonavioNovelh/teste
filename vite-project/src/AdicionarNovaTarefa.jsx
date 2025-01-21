import React, { useState } from 'react'


function Tarefa(nomeTitulo, descricaoTarefa, horaDataTarefa) {
  (this.nomeTitulo = nomeTitulo),
    (this.descricaoTarefa = descricaoTarefa),
    (this.horaDataTarefa = horaDataTarefa);
}



const AdicionarNovaTarefa = () => {

  return (
    <div className="maezoka">
      <h1>Todas as tarefas</h1>
      <div>
        <input
          placeholder="Pesquise a tarefa"
          type="search"
          name=""
          id=""
          className="pesquisar"
        />
        <div className="Tarefas">
          <div className="">
            <h2>TITULO 1</h2>
            <p>Descricao</p>
            <p>Hora</p>
          </div>

          <div className="editar">
            <button>EDIT</button>
            <button>VIEW</button>
          </div>
        </div>
    
      </div>
      <button className='geral'>+</button>
    </div>
  );
}

      <div className="Tarefas">
        <h2>TITULO 1</h2>
        <p>Descricao</p>
        <p>Hora</p>

        <div className="editar">
          <button>EDIT</button>
          <button>VIEW</button>
        </div>
      </div>;
export default AdicionarNovaTarefa;
