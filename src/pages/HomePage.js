import { Container } from 'reactstrap';
import { CalenderPage } from '../components/Calender';

const HomePage = () => {
    return (
        <>
            <Container>
                <h1 className="mt-5">F1 Calender</h1>
                <p className="m-5">Your simple one stop site for all of your up to date F1 race weekend information tailored to your timezone!</p>
                <CalenderPage />
            </Container>
        </>
    )
}

export default HomePage;