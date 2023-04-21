import React, {useState} from 'react'


export const EjercicioComponente = ({year}) => {

    const [yearNow, setYear] = useState(year);

    const handleNextYear = () => {
        setYear(yearNow + 1);
    }

    const handlePrevYear = () => {
        setYear(yearNow - 1);
    }

  return (
    <div>
        <h2>Ejercicio Componente</h2>
        <strong className='label label-green'>
            {yearNow}
        </strong>
        <p className='button-control'>
            <button onClick={handlePrevYear}>Siguiente</button>
            &nbsp;
            <button onClick={handleNextYear} className='siguiente'>Anterior</button>
        </p>
    </div>
  )
}
