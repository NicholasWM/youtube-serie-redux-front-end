import React from 'react'
import {useSelector} from 'react-redux'
import {hideMessage, showMessage} from '../../store/layout'
export default function Message(){
    const isShow = useSelector(({layout})=>layout.showMessage)
    return (
        <React.Fragment>
            {isShow && (
                <div className="container mt-3">
                    <div className="alert alert-success" role="alert">
                        Cadastro com sucesso!
                    </div>
                </div>
            )}
        </React.Fragment>
    )
}