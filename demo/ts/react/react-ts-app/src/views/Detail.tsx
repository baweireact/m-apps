import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Api from '../api'

interface IProps extends RouteComponentProps {

}

const Detail = (props: IProps ) => {
  
  useEffect(() => {
    //@ts-ignore
    let { id } = props.match.params
    Api.getDetail(id).then(res =>  {

    })
  }, [props])
  
  return (
    <div>
      详情
    </div>
  )
}

export default Detail
