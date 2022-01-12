import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardComp from "../components/CardComp";
import Header from "../components/Header";
import { TABLE_ROUTE, TABLE_ROUTE_1, TABLE_ROUTE_2, TABLE_ROUTE_3, TABLE_ROUTE_4, TABLE_ROUTE_5 } from "../utils/consts";
import { useMediaQuery } from "react-responsive";


function Home() {

  const mobile = useMediaQuery({ query: "(max-width: 480px)" });

  const navigate = useNavigate();

    return (
        <div className="App">
        <Header/>
          <Container>
          <div style={{ marginTop: "2rem" }} className="cards">
            <Row>
              <Col style={{display: 'flex'}} onClick={() => navigate(TABLE_ROUTE_1)}>
                <CardComp
                  title="Экспресс-метод определения вероятности развития врожденной пневмонии у доношенных новорожденных"
                  name="Горячко А.Н., Сукало А.В., Станкевич О.Б., Самойлович С.В."
                  description="Математическая модель методом многомерного анализа позволяет в течение первых суток жизни без рентгенограммы легких определить доношенных новорожденных в группу высокого риска по развитию врожденной пневмонии."
                />
              </Col>
              <Col style={
                mobile
                ? {paddingTop: '1.5rem', display: 'flex'}
                : {paddingTop: '0rem', display: 'flex'}
              } onClick={() => navigate(TABLE_ROUTE_2)}>
                <CardComp
                  title="Прогностическая модель для определения вероятности развития врожденной пневмонии у доношенных новорожденных"
                  name="Горячко А.Н., Сукало А.В., Улезко Е.А., Павлович Т.П."
                  description="Прогностическая модель для определения вероятности развития врожденной пневмонии у доношенных новорожденных, основанная на методе многомерного анализа, в течение первых трех суток жизни без рентгенограммы легких позволяет выделить доношенных новорожденных в группу высокого риска по развитию врожденной пневмонии."
                />
              </Col>
            </Row>
            <Row style={{marginTop: '1.5rem'}}>
              <Col style={{display: 'flex'}} onClick={() => navigate(TABLE_ROUTE_3)}>
                <CardComp
                  title="Определение вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела экспресс-методом"
                  name="Горячко А.Н., Сукало А.В., Рожко Ю.В., Свирская О.Я."
                  description="Математическая модель методом многомерного анализа позволяет в течение первых суток жизни выделить недоношенных новорожденных с низкой массой тела в группу высокого риска по развитию врожденной пневмонии."
                />
              </Col>
              <Col style={
                 mobile
                 ? {paddingTop: '1.5rem', display: 'flex'}
                 : {paddingTop: '0rem', display: 'flex'}
              } onClick={() => navigate(TABLE_ROUTE_4)}>
                <CardComp
                  title="Прогностическая модель для определения вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела"
                  name="Горячко А.Н., Сукало А.В., Улезко Е.А., Павлович Т.П."
                  description="Прогностическая модель для определения вероятности развития врожденной пневмонии у недоношенных новорожденных с низкой массой тела, основанная на методе многомерного анализа, в течение первых трех суток жизни позволяет выделить недоношенных новорожденных с низкой массой тела в группу высокого риска по развитию врожденной пневмонии."
                />
              </Col>
            </Row>
            <Row style={{marginTop: '1.5rem'}}>
              <Col style={{display: 'flex'}} onClick={() => navigate(TABLE_ROUTE_5)}>
                <CardComp
                  title="Модель определения вероятности развития врожденной пневмонии у недоношенных новорожденных с очень низкой и экстремально низкой массой тела"
                  name="Горячко А.Н., Сукало А.В., Улезко Е.А."
                  description="Математическая модель для определения вероятности развития врожденной пневмонии у недоношенных новорожденных с очень низкой и экстремально низкой массой тела, основанная на методе многомерного анализа, в течение первых трех суток жизни позволяет выделить недоношенных новорожденных с массой тела 500-1499 г в группу высокого риска по развитию врожденной пневмонии."
                />
              </Col>
              <Col style={
                 mobile
                 ? {paddingTop: '1.5rem', display: 'flex'}
                 : {paddingTop: '0rem', display: 'flex'}
              } onClick={() => navigate(TABLE_ROUTE)}>
              <CardComp
                  title="Прогностическая модель для определения вероятности развития геморрагического синдрома у недоношенных новорожденных с врожденной пневмонией"
                  name="А. Н. Горячко, А. В. Сукало"
                  description="Прогностическая модель для определения вероятности развития геморрагического синдрома у недоношенных новорожденных с врожденной пневмонией."
                />
              </Col>
            </Row>
          </div>
        </Container>
       
      </div>
    );
  }
  
  export default Home;
  