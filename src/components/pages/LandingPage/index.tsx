import BookList from "../../molecules/BookList";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";

const LandingPage = () => {
    return <div>
        <Header></Header>
        <BookList data={null}></BookList>
        <Footer></Footer>
    </div>
}

export default LandingPage;