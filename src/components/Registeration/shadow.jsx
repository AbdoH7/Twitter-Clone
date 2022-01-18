


const hide = (event) => {
    event.target.style.display = "none"
    window.history.back()
}

const Shadow = (props) => {
    return (
        <div onClick={hide} style={style}>
            {props.children}
        </div>
    )
}



const style = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    width:"100%",
    height:"100%",
    backgroundColor:"rgba(0,0,0,0.5)"
}
export default Shadow
