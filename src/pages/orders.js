import React from 'react'
import styled from 'styled-components'
import Skeleton from 'react-loading-skeleton'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

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

const CardContent = ({ data }) => {
  return (
    <table>
      <tr>
        <td>ID</td>
        <td>Nome</td>
        <td>Valor</td>
      </tr>

      {data?.map((row, key) => {
        return (
          <tr key={key}>
            <Link to={`/order/${row.idPlano}`}>{row.idPlano}</Link>
            <td>{row.nome}</td>
            <td>{row.valor}</td>
          </tr>
        )
      })}
    </table>
  )
}

const Orders = () => {
  const { data } = useFetch('/plano/listar/')
  if (!data) {
    return (
      <Container className='App'>
        <table>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>Valor</td>
          </tr>

          {[1, 2, 3, 4, 5].map((row, key) => {
            return (
              <tr key={row.idPlano || <Skeleton />}>
                <td>{row.idPlano || <Skeleton />}</td>
                <td>{row.nome || <Skeleton />}</td>
                <td>{row.valor || <Skeleton />}</td>
              </tr>
            )
          })}
        </table>
      </Container>
    )
  }

  return (
    <Container className='App'>
      <CardContent data={data} />
    </Container>
  )
}

export default Orders
