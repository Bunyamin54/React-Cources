
const LessonCard = (props) => {

   
  return ( 
    
// eslint-disable-next-line react/style-prop-object
<div className="card mb-3" style ={{maxwidth: "540px" }}>
  <div className="row g-0">
    <div className="col col-md-6 col-lg-4">
      <img src={props.image} className="img-fluid rounded-start" alt={props.name} style= {{width : "100px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> 


  )
}

export default LessonCard
