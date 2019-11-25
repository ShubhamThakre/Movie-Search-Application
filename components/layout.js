import Header from '../components/header'
import Head from 'next/head'
import Link from 'next/link';
import Footer from '../components/footer'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const Layout = (props) =>{
    return(
        <div style={layoutStyle}>
            <Head>
                <title>My Next APP</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"></link>
            </Head>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout