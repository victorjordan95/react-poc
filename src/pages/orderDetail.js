import React from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router'

const Container = styled.div`

    >div {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      width: 100%;
    }

  .card {
    background: #c9c9c9;
    margin: 8px 16px;
    padding: 18px;
    width: 25%
  }
`

const OrderDetail = (props) => {
  const { id } = useParams()
  const { data } = useFetch(`/plano/id/${id}/`)

  if (!data) {
    return (
      <Container className='App'>
        <p>ID: <Skeleton /></p>
        <p>nome: <Skeleton /></p>
        <p>Quantidade chamado mes: <Skeleton /></p>
        <p>valor: <Skeleton /></p>
      </Container>
    )
  }

  return (
    <Container className='App'>
      <p>ID: {data.idPlano}</p>
      <p>nome: {data.nome}</p>
      <p>Quantidade chamado mes: {data.quantidadeChamadoMes}</p>
      <p>valor: {data.valor}</p>
    </Container>
  )
}

export default OrderDetail
