import Link from 'next/link';

const linkStyle = {
    borderRight: '3px solid #795548',
    padding: '0px 13px'
};

const Header = () =>{
    return(
        <div style={{marginBottom: '15px'}}>
        <h3><span style={{color: '#607D8B',fontWeight: '600',padding: '0px 10px'}}>Movie-Search-Application</span></h3>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        </div>
    );
}

export default Header