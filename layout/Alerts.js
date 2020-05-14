import React, { useContext } from 'react'
import  AlertContext from '../../contexts/alert/alertContext'

const Alerts = () => {
    const alertContext = useContext(AlertContext)

    return(
        alertContext.alerts.lenght > 0 && alertContext.alerts.map(alert => (
            <div key={alert.div} className={`alert alert-${alert.type}`}>
                <i className= "fas.fa-info-circle" ></i> {alert.msg} 

            </div>
        ))
    )

}

export default Alerts