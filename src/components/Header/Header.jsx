import Logo from "../../assets/investment-calculator-logo.png"

function Header() {
    return (
        <header id='header'>
            <img width={64} height={64} src={Logo} alt='Logo showing a money bag' loading='eager' />
            <h1>Investment Calculator</h1>
        </header>
    )
}

export default Header
