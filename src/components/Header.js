// Title component for display logo

const Title = ()=>(
    <a href = "/" >
      <img className = "logo"
       alt = "logo"
       src = "data:image/png;base64,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"/>
    </a>
   );

const Header = ()=>{
    return(
        <div className = "header">
            <Title/>
        <div className = "nav_items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
                
            </ul>
        </div>
        </div>
    )
}
   export default Header;