function Footer(){
  return <footer className='page-footer grey darken-1'>
    <div className="footer-copyright">
      <div className='container'>
        {new Date().getFullYear}
        <img src={require('../photos/10444902.png')} alt="#" width="100px" height="100px"/>
        <a href="#!" className="max grey-text text-lighten-4 right">
          Max Faterin  
        </a>
      </div>
    </div>
  </footer>
}
export { Footer };