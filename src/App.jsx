import React, {useMemo, useReducer, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdicionarNovaTarefa from "./AdicionarNovaTarefa";
import AdicionarTarefa from "./AdicionarTarefa";

export default function App() {
  return (
    
   <>
   {/*<AdicionarNovaTarefa/>*/}
   <AdicionarTarefa/>
   </>
  );
}


