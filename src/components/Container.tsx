interface props {
    children : React.ReactNode ,
    className? : string
}
function Container({children , className} : props) {
  return (
    <div className={`max-w-screen-xl mx-auto my-10 px-4 lg:px-0 ${className}` } >
      {children}
    </div>
  )
}

export default Container
