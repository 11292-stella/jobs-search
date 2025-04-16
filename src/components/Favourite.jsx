import { useSelector } from "react-redux"
import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const Favourite = function () {
  const listaFav = useSelector((state) => {
    return state.cart.content
  })

  return (
    <Row>
      <Col>
        <h1>⭐ Le tue aziende preferite</h1>
        {listaFav.map((company, i) => (
          <li key={i} className="my-3">
            <Link to={`/company/${company}`}>{company}</Link>
          </li>
        ))}
      </Col>
    </Row>
  )
}
export default Favourite
