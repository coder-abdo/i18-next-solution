import Footer from "./Footer/footer"
import Header from "./Header/header";

export default function Layout(props) {
  return (
    <>
        <Header />
            {props.children}
        <Footer />
    </>
  )
}
